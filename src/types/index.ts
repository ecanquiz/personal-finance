export type Task = {
  id: number;
  title: string;
  description: string;
  done: boolean;
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
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

export type Category = {
  name: string
}
