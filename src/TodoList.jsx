import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleToggleTodo, handleDelete }) {
  return (
    <ul className="list">
      {/*  */}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            handleToggleTodo={handleToggleTodo}
            handleDelete={handleDelete}
          />
        );
      })}
      {/*  */}
    </ul>
  );
}
