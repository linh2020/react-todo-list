import { useState } from "react";
import { useId } from "react";

export default function Testing() {
  const uID1 = useId();
  const uID2 = useId();
  const uID3 = useId();

  const [emp, setEmp] = useState("");

  const people = [
    { id: 1, firstName: "", lastName: "" },
    { id: 2, firstName: "", lastName: "" },
  ];

  const personInfo = { id: 1, firstName: "", lastName: "" };
  const [person, setPerson] = useState(personInfo);
  //   console.log(person);

  //   const handleInfo = (nameValue) => {
  //     return (event) => {
  //       setInfo({ ...info, [nameValue]: event.target.value });
  //     };
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const employees = [
    "Jennifer Pantano",
    "Glen Legaspi",
    "Meagan Whiteman",
    "Matthew King",
    "Cynthia Thomas",
    "Ray Schaefer",
    "Marco Rucker",
    "Tim Howard",
    "Rosalyn Tyson",
    "Linh Huynh",
    "Linh Nguyen",
  ];

  //   const handleFilterEmp = (e) => setEmp(e.target.value);
  //   const filteredEmp = employees.filter((e) => e.toLowerCase().includes(emp));

  const handleFilterEmp = (e) => setEmp(e.target.value);
  const filteredEmp = employees.filter((e) =>
    e.toLowerCase().includes(emp.toLowerCase())
  );

  //   console.log(filteredEmp);
  //   console.log(emp);
  //   console.log(uID1, uID2, uID3);
  return (
    <>
      <hr />
      <p>checkbox</p>
      <label>
        <input type="checkbox" name="city" />
      </label>
      <hr />
      <h1>Testing</h1>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" onChange={handleInfo("firstName")} />
        <input type="text" onChange={handleInfo("lastName")} /> */}
        <input
          type="text"
          value={person.firstName}
          onChange={(e) =>
            setPerson((prev) => ({
              ...prev,
              firstName: e.target.value,
            }))
          }
        />

        <input
          type="text"
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
        <button>Submit</button>
      </form>
      <p>
        First name: {person.firstName}
        {/* {info.firstName !== "" && <p>Your name is {info.firstName}.</p>} */}
      </p>
      <p>Last name: {person.lastName}</p>
      <hr />
      {/* ------------------------------------------------------------ */}
      <input type="text" value={emp} onChange={handleFilterEmp} />
      <div>
        {filteredEmp.map((e, index) => (
          <div key={index}>{e}</div>
        ))}
      </div>
      <hr />
    </>
  );
}
