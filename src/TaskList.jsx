import React from "react";
import { task } from "./task";
import { useState } from "react";

console.log(task);

function TaskList() {
  const [tasks, setTasks] = useState([]);

  if(tasks.length===0){
    return <h1>No hay tareas aun</h1>
  }
  return <div>
    {tasks.map((task) => {
        <div> tarea</div>
    })}</div>;
}

export default TaskList;
