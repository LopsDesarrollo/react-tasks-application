import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
        title,
        description
    });
    //Limpiamos formulario
    setTitle('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3">Crear tarea</h1>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 w-full mb-2"
        autoFocus
      />
      <textarea placeholder="Escribe la descripcion de la tarea"
        onChange={(e)=> setDescription(e.target.value)}
        className="bg-slate-300 w-full mb-2"
        value={description}
        ></textarea>
      <button
        className="bg-indigo-800 px-3 py-1 text-white rounded-md hover:bg-indigo-400"
      >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
