import { useState } from "react";
import "./styles.css";

export default function App() {
  //
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  //
  function handleTodos(e) {
    e.preventDefault();

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
    setNewItem("");
    //
  }

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
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleTodos}>
          Add
        </button>
      </form>
      {/* Todo List */}
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {/*  */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => handleToggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
        {/*  */}
      </ul>
    </>
  );
}
