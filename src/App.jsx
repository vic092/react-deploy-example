import React from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

export default function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto">
        <TaskForm></TaskForm>
        <TaskList></TaskList>
      </div>
    </main>
  );
}
