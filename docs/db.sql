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
