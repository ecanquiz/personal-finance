import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL
  //baseURL: import.meta.env.SUPABASE_URL
});

export const getTasks = async () => {
  return await instance.get("/tasks");
}

export const getTask = async <T>(taskId: T) => {
  return await instance.get(`/tasks/${taskId}`);
}


