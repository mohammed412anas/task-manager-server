import { Response, Request } from "express";
import { getTasks } from "../services/service";
import ResponseBody from "../services/serviceTypes";

export const getTasksController = async (req: Request, res: Response) => {
  try {
    const response = (await getTasks()) as ResponseBody;

    res.status(response.statusCode).contentType("json").json(response);
  } catch (error) {
    res.status(500).send(new Error(error as string));
  }
};
