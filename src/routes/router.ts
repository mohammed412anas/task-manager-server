import express, { IRouter } from "express";
import { getTasksController, postTaskController } from "../controllers/controller";

const router: IRouter = express.Router();

router.get(`/tasks`, getTasksController);
router.post(`/postTask`, postTaskController);

export default router;
