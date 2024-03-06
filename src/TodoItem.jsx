import "./styles.css";
export default function TodoItem({
  tasks,
  handleUpdateTask,
  handleDeleteTask,
  handleCompletedTask,
  handleChangeTask,
}) {
  //   console.log(tasks);
  return (
    <>
      <h1 className="header">
        {tasks.length != 0 ? "Todo List" : "Nothing To Do"}
      </h1>
      <ul className="list">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCompletedTask(task.id)}
                />
              </label>

              {!task.isEditTodo ? (
                task.title
              ) : (
                <input
                  type="text"
                  value={task.title}
                  onChange={(e) => handleChangeTask(task.id, e.target.value)}
                />
              )}
              <button className="btn" onClick={() => handleUpdateTask(task.id)}>
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
