import { useState } from "react";

export default function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  //   handleTodos
  function handleTodos(e) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);

    // setTodos([
    //   ...todos,
    //   { id: crypto.randomUUID(), title: newItem, completed: false },
    // ]);

    setNewItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleTodos}>
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
    </form>
  );
}
