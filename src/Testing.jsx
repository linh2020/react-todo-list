import { useState } from "react";

export default function Testing() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  console.log(name);
  return (
    <>
      <hr />
      <h1>Testing</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} />
        <button>Submit</button>
      </form>
    </>
  );
}
