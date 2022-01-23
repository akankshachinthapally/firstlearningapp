import { useState } from "react";
const cars = ["bmw", "ferari", "benz", "suzuki"];
const names = [
  { nam: "akanksha", branch: "ece" },
  { nam: "xyz", branch: "b" },
  { nam: "a", branch: "e" },
];

const State = () => {
  function changeName() {
    setState("ammu");
  }
  const [state, setState] = useState("Akanksha");
  const [array, setArray] = useState(names);

  return (
    <div>
      {/* <p>{state}</p>
      <button onClick={changeName}>Submit</button> */}

      {array.map((item, index) => (
        <>
          {index % 2 === 0 ? (
            <div style={{ display: "flex" }}>
              <p>{item.nam}</p> <p> {item.branch}</p>
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
};

export default State;
