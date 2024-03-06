import TodoItem from "./TodoItem";
import "./styles.css";

export default function TodoList({
  tasks,
  handleCompletedTask,
  handleUpdateTask,
  handleDeleteTask,
  handleChangeTask,
}) {
  return (
    <>
      <TodoItem
        tasks={tasks}
        handleCompletedTask={handleCompletedTask}
        handleUpdateTask={handleUpdateTask}
        handleDeleteTask={handleDeleteTask}
        handleChangeTask={handleChangeTask}
      />
    </>
  );
}
