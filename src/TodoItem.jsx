export default function TodoItem({ tasks }) {
  return (
    <>
      <p>Todo List</p>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <label htmlFor="item">
                <input type="checkbox" id="item" />
                {task.title}
              </label>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
