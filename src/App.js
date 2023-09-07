import "./styles.css";
import { useState } from "react";

export default function App() {
  const [box, setBox] = useState([
    {
      index: 0,
      value: ""
    }
  ]);

  const handleClick = () => {
    setBox([
      ...box,
      {
        index: box.length,
        value: ""
      }
    ]);
  };

  const handleChange = (e, index) => {
    const insertVaule = [...box];
    const updatedIndex = insertVaule.findIndex((val) => val.index === index);
    insertVaule[updatedIndex]["value"] = e.target.value; //change
    setBox(insertVaule);
  };

  const handleDisplay = () => {
    console.log(box);
  };
  return (
    <div className="App">
      {box.map(({ index }) => (
        <div key={index} style={{ margin: "5px" }}>
          <input
            value={box[index]["value"]}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
      <button onClick={handleClick}>Add new input</button>
      <button onClick={handleDisplay}>Display Result</button>
    </div>
  );
}
