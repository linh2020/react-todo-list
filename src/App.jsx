import { useEffect, useState } from "react";
import NewToDoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const localTasks = localStorage.getItem("localTasks");
    if (localTasks.length === 0) return [];
    return JSON.parse(localTasks);
  });

  useEffect(() => {
    localStorage.setItem("localTasks", JSON.stringify(tasks));
    // console.log("tasks changed");
  }, [tasks]);

  const handleAddTasks = (newTask) => {
    setTasks((currentTask) => [
      ...currentTask,
      {
        id: crypto.randomUUID(),
        title: newTask,
        completed: false,
        isEditTodo: false,
      },
    ]);
  };

  const handleDeleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const handleCompletedTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === id) return { ...task, completed: !task.completed };
        return task;
      })
    );
  };

  const handleUpdateTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, isEditTodo: !task.isEditTodo } : task
      )
    );
  };

  const handleChangeTask = (id, newTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, title: newTask } : task
      )
    );
  };

  console.log(tasks);

  // Wrapper , Form, Listing(li, ....)
  return (
    <>
      <NewToDoForm tasks={tasks} handleAddTasks={handleAddTasks} />
      <TodoList
        tasks={tasks}
        handleCompletedTask={handleCompletedTask}
        handleUpdateTask={handleUpdateTask}
        handleDeleteTask={handleDeleteTask}
        handleChangeTask={handleChangeTask}
      />
    </>
  );
}
