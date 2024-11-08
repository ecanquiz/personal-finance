-- https://vivasart.com/en/blog/grouping-data-in-supabase-a-beginners-guide-with-examples
-- view
CREATE VIEW movements_by_month_view AS
            SELECT
            type,
            SUM(amount), TO_CHAR(DATE(date), 'MM') AS mm,
            TO_CHAR(DATE(date), 'Month') AS month
            FROM movements 
            GROUP by type, month, mm 
            ORDER BY mm;

          select * from movements_by_month_view

--trigger
create or replace function movements_generate_number()
  returns trigger
  language plpgsql
as $$
begin
  new.number:=to_char(current_date, 'yymm')
    || new.type::int::character varying
    || lpad(
      (select count(*) + 1
		    from movements
			  where to_char(date, 'YYMM') = to_char(current_date, 'yymm'))::character varying,5,'0'
		  );

    return new;
end;
$$;
            
create trigger movement_generate_number
  before insert on movements
  for each row
execute function movements_generate_number();

--view
create or replace view movements_view AS
  select
    m.id,
    number,
    date,
    case
      when m.type = true then 'Income' 
      when m.type = false then 'Expenses' 
    end as movement_type,
    c.name as category,
    concept,
    budget,
    amount,
    to_char(date, 'mm') as month
  from movements m
    inner join categories c on m.category_id = c.id;



    --cursor
   --date timestamp with time zone,

    create
or replace function movements_with_balances( mm varchar ) returns table (
    id bigint,
    number character varying,
    date date,
    movement_type text,
    category character varying,
    concept character varying,
    budget double precision,
    amount double precision,
    balance double precision
) as $$

DECLARE
    accumulated_balance double precision := 0;
    record RECORD;
BEGIN 

    FOR record IN
        SELECT 
            mv.id, mv.number, mv.date, mv.movement_type, mv.category, mv.concept, mv.budget, mv.amount 
        FROM  movements_view as mv
        --WHERE mv.month = mm
        ORDER BY id
    LOOP
        IF record.movement_type='Income' THEN
            accumulated_balance := accumulated_balance + record.amount;
        ELSEIF record.movement_type='Expenses' THEN
            accumulated_balance := accumulated_balance - record.amount;
        END IF;

        RETURN QUERY SELECT
            record.id,
            record.number,
            record.date,
            record.movement_type,
            record.category,
            record.concept,
            record.budget,
            record.amount,
            accumulated_balance;


    END LOOP;
    RETURN;
END;
$$ language plpgsql;


--movements
create table
  public.movements (
    id bigint generated by default as identity not null,
    number character varying null,
    moment timestamp with time zone not null default now(),
    movement_type boolean not null default false,
    category_id bigint null,
    concept character varying null,
    budget double precision null,
    amount double precision null,
    balance double precision null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now(),
    deleted_at timestamp with time zone default null,
    constraint movements_pkey primary key (id),
    constraint movements_category_id_fkey foreign key (category_id) references categories (id)
  ) tablespace pg_default;

create trigger movement_generate_number before insert on movements for each row
execute function movements_generate_number ();


-- trigger movements_record_the_balance
create or replace function movements_record_the_balance()
  returns trigger
  language plpgsql
as $$
declare
    accumulated_balance DOUBLE PRECISION := 0;
begin

    select COALESCE(MAX(balance), 0)
        into accumulated_balance
        from movements
        where moment < NEW.moment;

    if new.movement_type then
        accumulated_balance := accumulated_balance + new.amount;
    else
        accumulated_balance := accumulated_balance - new.amount;
    end if;

    new.balance := accumulated_balance;
    return new;

end;
$$;


CREATE TRIGGER movement_record_the_balance
before INSERT ON movements
FOR EACH ROW
EXECUTE FUNCTION movements_record_the_balance();