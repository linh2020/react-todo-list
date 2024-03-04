export default function TodoItem({
  completed,
  id,
  title,
  handleToggleTodo,
  handleDelete,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => handleToggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
}
