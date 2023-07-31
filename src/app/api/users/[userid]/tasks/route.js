import { getResponseMessage } from "@/helper/ResponseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userid } = params;

  try {
    const tasks = await Task.find({
      userId: userid,
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to get task", 404, false);
  }
}
