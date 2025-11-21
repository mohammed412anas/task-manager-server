export type Task = {
  id: string;
  taskName: string;
  description: string;
  status: string;
  priority: string;
  deadline: Date;
};
type ResponseBody = {
  statusCode: number;
  message: string;
  body: Task[];
};

export type ResponseBodyOfTask = {
  statusCode: number;
  message: string;
  body: Task;
};

export type PostTask = (task: Task) => Promise<ResponseBody | Error>;
export type EditTask = (task :Task) => Promise<ResponseBody | Error>;
export type DeleteTask = (taskId:string) => Promise<ResponseBody | Error>;
export type GetTaskById = (taskId:string) => Promise<ResponseBodyOfTask | Error>;
export default ResponseBody;
