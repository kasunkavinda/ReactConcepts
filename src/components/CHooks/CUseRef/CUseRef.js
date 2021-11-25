import React, { useRef } from "react";

//use cases defined below

function CUseRef() {
  const inputRef = useRef(null);

  const SubmitInput = () => {
    //   first use case
    console.log(inputRef.current.value);

    //2nd use case: setting the focus
    inputRef.current.focus();

    // 3rd use case: clear the fields after submit
    inputRef.current.value = "";
  };
  return (
    <div>
      <strong>CUseRef</strong>
      <input ref={inputRef} />
      <button onClick={SubmitInput}>Submit</button>
    </div>
  );
}

export default CUseRef;
