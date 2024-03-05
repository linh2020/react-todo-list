import TodoItem from "./TodoItem";

export default function TodoList({ tasks }) {
  return (
    <>
      <TodoItem tasks={tasks} />
    </>
  );
}
