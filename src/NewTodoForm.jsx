import { useState } from "react";

export default function NewToDoForm({ tasks, handleAddTasks }) {
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

  console.log(tasks);

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="item">
          New Item
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={handleAddTodo}
          />
        </label>
        <button>Add</button>
      </form>
    </>
  );
}
