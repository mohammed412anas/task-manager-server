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

export type PostTask = (task: Task) => Promise<ResponseBody | Error>;

export default ResponseBody;
