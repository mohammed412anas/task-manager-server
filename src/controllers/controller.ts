import { Response, Request } from "express";
import { deleteTask, editTask, getTasks, postTask } from "../services/service";
import ResponseBody, { ResponseBodyOfTask, Task } from "../services/serviceTypes";

export const getTasksController = async (req: Request, res: Response) => {
  try {
    const response = (await getTasks()) as ResponseBody;
    res.status(response.statusCode).contentType("json").json(response);
  } catch (error) {
    res.status(500).send(new Error(error as string));
  }
};

export const postTaskController = async (req: Request, res: Response) => {
  try {
    const { task } = req.body;
    const response = (await postTask(task)) as ResponseBody;
    res.status(response.statusCode).contentType("json").json(response);
  } catch (error) {
    res.status(500).send(new Error(error as string));
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const { taskId} = req.params;
    {String(taskId)}
    const response = (await deleteTask(taskId)) as ResponseBody;
    res.status(response.statusCode).contentType("json").json(response);
  } catch (error) {
    res.status(500).send(new Error(error as string));
  }
};

export const editTaskController = async (req: Request, res: Response) => {
  try {
    const { task } = req.body;
    const response = (await editTask(task)) as ResponseBody;

    res.status(response.statusCode).contentType("json").json(response);
  } catch (error) {
    res.status(500).send(new Error(error as string));
  }
};
