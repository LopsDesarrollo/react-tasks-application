import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
  

  useEffect(() => {
    setTasks(data);
  }, []);

 

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
}
export default App;
