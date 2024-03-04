import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  //
  // const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(newItem) {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
  }
  //
  // function handleTodos(e) {
  //   e.preventDefault();

  // setTodos([
  //   ...todos,
  //   { id: crypto.randomUUID(), title: newItem, completed: false },
  // ]);
  //   setNewItem("");
  //   //
  // }

  function handleToggleTodo(id, completed) {
    //
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: completed };
        return todo;
      })
    );
    //
  }

  function handleDelete(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    //
  }

  // console.log(newItem);
  console.log(todos);

  //
  return (
    <>
      {/* <form className="new-item-form" onSubmit={handleTodos}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form> */}

      <NewTodoForm addTodo={addTodo} />
      {/* Todo List */}
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        handleDelete={handleDelete}
      />
      {/*  */}
    </>
  );
}
