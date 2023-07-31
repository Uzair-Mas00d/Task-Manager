import { getResponseMessage } from "@/helper/ResponseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { taskid } = params;

  try {
    const task = await Task.findById(taskid);

    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting task", 404, false);
  }
}

export async function PUT(request, { params }) {
  const { taskid } = params;

  try {
    const { title, content, status } = await request.json();
    let task = await Task.findById(taskid);
    task.title = title;
    task.content = content;
    task.status = status;

    const updatedTask = await task.save();

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in updating task", 500, false);
  }
}

export async function DELETE(request, { params }) {
  const { taskid } = params;

  try {
    await Task.deleteOne({
      _id: taskid,
    });

    return getResponseMessage("Task Deleted", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in deleting Task", 500, false);
  }
}
