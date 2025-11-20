import db from "../config";
import ResponseBody, { PostTask, Task } from "./serviceTypes";

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

export const postTask : PostTask = async (task) => {
  try {
    await db.collection('user').doc(task.id).set(task)
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