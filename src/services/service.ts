import db from "../config";
import ResponseBody, { Task } from "./serviceTypes";

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
