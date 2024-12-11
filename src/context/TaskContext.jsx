import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <TaskContext.Provider value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask
    }}>{props.children}</TaskContext.Provider>
  );
}
