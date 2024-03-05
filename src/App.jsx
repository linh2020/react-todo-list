import { useState } from "react";
import NewToDoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTasks = (newTask) => {
    setTasks((currentTask) => [
      ...currentTask,
      {
        id: crypto.randomUUID(),
        title: newTask,
        completed: false,
      },
    ]);
  };

  //   console.log("app: " + tasks);

  // Wrapper , Form, Listing(li, ....)
  return (
    <>
      <h1>New Item</h1>
      <NewToDoForm tasks={tasks} handleAddTasks={handleAddTasks} />
      <TodoList tasks={tasks} />
    </>
  );
}
