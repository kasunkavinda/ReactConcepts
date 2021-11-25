import React, { useEffect, useState } from "react";
import axios from "axios";

//  useeffect is just a funtion will call, whenever(can be limited using last parameter) page re rendered
//  useeffect basically used for make API calls

function CUseEffect() {
  const [textValue, setTextValue] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        console.log(response);
        setTextValue(response.data[0].email);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div>
      <strong>CUseEffect</strong>
      <p>{textValue}</p>
    </div>
  );
}

export default CUseEffect;
