export type Props = {
  readonly movement?: Record<string, any>;
  readonly onSubmit?: ((...args: any[]) => any);
}

export type Category = {
  id: number;
  name: string;
  type: boolean;
}

export type Movement = {
  id?:          number;
  number:      string;
  created_at?:  Date;
  date:        Date;
  category_id: number;
  category?:   string;
  concept:     string;
  budget:      number;
  amount:      number;
  balance?:     number;
  type?:        boolean;
  movement_type?: 'Income' | 'Expenses';
  categories?:  Category;
}
