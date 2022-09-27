import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    createTask(title, description);
    e.preventDefault();
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form action="" onSubmit={handleSubmit} className="p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Añadir Tareas</h1>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className ="bg-slate-300 p-3 w-full mb-2"
        />
        <input
          type="textArea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className ="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-lg hover:bg-slate-400">Guardar</button>
      </form>
    </div>
  );
}
