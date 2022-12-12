import React, { useState } from "react";

const input = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div>
      <input placeholder="wolfoo games"></input>
      <button>Edit</button>
    </div>
  );
};

export default input;
