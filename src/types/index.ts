export type Props = {
  readonly movement?: Record<string, any>;
  readonly onSubmit?: ((...args: any[]) => any);
}

export type Category = {
  name: string
}

export type Movement = {
  id:          number;
  created_at:  Date;
  date:        Date;
  category_id: number;
  concept:     string;
  budget:      number;
  amount:      number;
  balance:     number;
  type:        boolean;
  categories:  Category;
}
