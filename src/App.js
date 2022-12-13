import "./App.css";
import { useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  const isTextInput = (e) => {
    return setText(e.target.value);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        height: "60px",
        backgroundColor: "#272e4b",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
        {showInput ? (
          <input
            placeholder="wolfoo games"
            type="text"
            onChange={isTextInput}
            style={{
              width: "200px",
              height: "40px",
              borderRadius: "8px",
              padding: "0 10px",
              border: "1px solid #313d5d",
              fontSize: "16px",
              outline: "none",
              backgroundColor: "#313d5d",
              color: "#fff",
            }}
          />
        ) : (
          <p
            style={{
              width: "200px",
              height: "42px",
              borderRadius: "8px",
              margin: "0",
              lineHeight: "42px",
              textAlign: "left",
              padding: "1px 11px",
              color: "#fff",
            }}
          >
            {text}
          </p>
        )}

        <div>
          <button
            onClick={handleShowInput}
            style={{
              height: "32px",
              width: "60px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#0f6eff",
              color: "#fff",
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
