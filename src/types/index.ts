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
  id:         number;
  created_at: Date;
  date:       Date;
  category:   number;
  concept:    string;
  budget:     number;
  amount:     number;
  balance:    number;
  type_id:    number;
}
