import express, { IRouter } from "express";
import { deleteTaskController, editTaskController, getTasksController, postTaskController } from "../controllers/controller";

const router: IRouter = express.Router();

router.get(`/tasks`, getTasksController);
router.post(`/postTask`, postTaskController);
router.delete(`/deleteTask/:taskId`, deleteTaskController);
router.put(`/editTask`, editTaskController);

export default router;
