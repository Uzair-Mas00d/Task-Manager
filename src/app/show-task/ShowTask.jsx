"use client";

import UserContex from "@/contex/userContex";
import { deleteTask, getTaskOfUser } from "@/services/TaskService";
import React, { useContext, useEffect, useState } from "react";
import Tasks from "./Tasks";
import { toast } from "react-toastify";

const ShowTask = () => {
  const [tasks, setTasks] = useState([]);
  const contex = useContext(UserContex);

  async function loadTask(userId) {
    try {
      const tasks = await getTaskOfUser(userId);
      setTasks([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (contex.user) {
      loadTask(contex.user._id);
    }
  }, [contex.user]);

  async function deleteTaskParent(taskId) {
    try {
      const result = await deleteTask(taskId);
      console.log(result);
      const newTasks = tasks.filter((item) => item._id != taskId);
      setTasks(newTasks)
      toast.success("Task is deleted");
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting Task");
    }
  }

  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3">Your Task ({tasks.length})</h1>
        {tasks.map((task) => (
          <Tasks
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTask;
