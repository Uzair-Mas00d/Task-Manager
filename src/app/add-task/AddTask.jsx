"use client";

import React, { useState } from "react";
import loginSvg from "../../assets/login.svg";
import Image from "next/image";
import { addTask } from "@/services/TaskService";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "64c201ceaf0d61647477f016",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);

    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added", {
        position: "top-center",
      });

      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-4 col-start-5 p-5">
        <div className="my-8 flex justify-center">
          <Image
            src={loginSvg}
            style={{
              width: "50%",
            }}
            alt="Login banner"
          />
        </div>
        <h1 className="text-3xl text-center">Add your task here</h1>

        <form action="#" onSubmit={handleAddTask}>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="task_title"
              className="w-full p-1 rounded-3xl bg-white focus:ring-gray-400 border border-white text-black"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              id="task_content"
              className="w-full p-1 rounded-3xl bg-white focus:ring-gray-400 border border-white text-black"
              rows={5}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2 "
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-1 rounded-3xl bg-white focus:ring-gray-400 border border-white text-black text-center"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-green-500 py-2 px-3 rounded-lg hover:bg-green-800"
            >
              Add Task
            </button>
            <button
              type="button"
              className="bg-red-500 py-2 px-3 rounded-lg hover:bg-red-800 ms-3"
            >
              Clear
            </button>
          </div>
          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
