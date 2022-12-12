import "./App.css";
import { useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(true);
  const [text, setText] = useState("");

  const handleShowInput = (e) => {
    setShowInput(!showInput);
  };

  const isTextInput = (e) => {
    setText(e.taget.value);
    console.log(setText);
  };

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      {showInput ? (
        <input placeholder="wolfoo games" type="text" onChange={isTextInput} />
      ) : (
        <p>{text}</p>
      )}

      <button onClick={handleShowInput}>edit</button>
    </div>
  );
}

export default App;
