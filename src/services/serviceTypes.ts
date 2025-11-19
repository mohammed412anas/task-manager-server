export type Task = {
  taskName: string;
  description: string;
  status: string;
  priority: string;
  deadline?: Date;
};
type ResponseBody = {
  statusCode: number;
  message: string;
  body: Task[];
};

export default ResponseBody;
