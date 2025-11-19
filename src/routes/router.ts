import express, { IRouter } from "express";
import { getTasksController } from "../controllers/controller";

const router: IRouter = express.Router();

router.get(`/tasks`, getTasksController);

export default router;
