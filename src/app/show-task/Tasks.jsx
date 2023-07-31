import UserContex from "@/contex/userContex";
import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";

const Task = ({ task, deleteTaskParent }) => {
  const { user } = useContext(UserContex);

  function deleteTask(taskId){
    deleteTaskParent(taskId)
  }

  return (
    <div
      className={`shadow-lg text-black mt-2 rounded-md ${
        task.status === "completed" ? "bg-green-400" : "bg-white"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          <span
            onClick={() => {
              deleteTask(task._id);
            }}
            className="shadow-lg text-white bg-gray-700 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-600"
          >
            <MdDelete />
          </span>
        </div>
        <p className="font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-right">
            Status:{" "}
            <span className="font-bold">{task.status.toUpperCase()}</span>
          </p>
          <p className="text-left">
            Author: <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
