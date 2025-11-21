import db from "../config";
import ResponseBody, {
  DeleteTask,
  EditTask,
  PostTask,
  Task,
} from "./serviceTypes";

export const getTasks = async () => {
  try {
    const responseBody: ResponseBody = {
      statusCode: 200,
      message: "Tasks fetched Successfully",
      body: (await db.collection("user").get()).docs.map((doc) =>
        doc.data()
      ) as Task[],
    };
    return responseBody;
  } catch (error) {
    return new Error(error as string);
  }
};

export const postTask: PostTask = async (task) => {
  try {
    await db.collection("user").doc(task.id).set(task);
    const responseBody: ResponseBody = {
      statusCode: 201,
      message: "New task added successfully",
      body: (await db.collection("user").get()).docs.map((doc) =>
        doc.data()
      ) as Task[],
    };
    return responseBody;
  } catch (error) {
    return new Error(error as string);
  }
};

export const deleteTask: DeleteTask = async (taskId) => {
  try {
    const deletedTaskTitle = (
      (await db.collection("user").doc(taskId).get()).data() as Task
    ).taskName;
    await db.collection("user").doc(taskId).delete();
    const responseBody: ResponseBody = {
      statusCode: 204,
      message: `Task ${deletedTaskTitle} is deleted successfully`,
      body: (await db.collection("user").get()).docs.map((doc) =>
        doc.data()
      ) as Task[],
    };
    if (!(await db.collection("user").doc(taskId).id)) {
      responseBody.statusCode = 404;
      (responseBody.message = `No Task with found with the Id Please provide the valid task`),
        (responseBody.body = []);
    }
    return responseBody;
  } catch (error) {
    return new Error(error as string);
  }
};

export const editTask: EditTask = async (task) => {
  try {
    const taskId = await db.collection("user").doc(task.id).id;
    const responseBody: ResponseBody = {
      statusCode: 404,
      message: "Task not found",
      body: (await db.collection("user").get()).docs.map((doc) =>
        doc.data()
      ) as Task[],
    };
    if (taskId === task.id) {
      await db.collection("user").doc(task.id).update(task);
      responseBody.statusCode = 201;
      responseBody.message = "Task editted successfully";
    }

    return responseBody;
  } catch (error) {
    return new Error(error as string);
  }
};
