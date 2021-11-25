import React, { useState } from "react";

// usestate rerender ( not reload) the page

function CUseState() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [typingVariable, setTypingVariable] = useState("...");

  const typingFun = (event) => {
    setTypingVariable(event.target.value);
  };

  return (
    <div>
      <strong>CUseState</strong>
      <input onChange={typingFun} />
      <p>{typingVariable}</p>
      <p>{count} </p>
      {visible && <p>Toggle World</p>}
      <button
        onClick={() => {
          setCount(count + 1);
          setVisible(!visible);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default CUseState;
