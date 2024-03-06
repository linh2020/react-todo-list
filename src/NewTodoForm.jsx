import { useState } from "react";
import "./styles.css";

export default function NewToDoForm({ handleAddTasks }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddTasks(newItem);

    setNewItem("");
  };

  const handleAddTodo = (e) => {
    setNewItem(e.target.value);
    // console.log(newItem);
  };

  // console.log(tasks);

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={handleAddTodo}
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  );
}
