import mongoose from "mongoose";
import { env } from "../../next.config";
import { user } from "@/models/user";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("db connected.....");
    // console.log(connection);

    // const uuser = new user({
    //   name: "test name",
    //   email: "test email",
    //   password: "test password",
    //   about: "this is testing",
    // });
    // await uuser.save()

    // console.log('user is created');
  } catch (error) {
    console.log("Failed to connect with database");
    console.log(error);
  }
};
