import React from "react";
import ReactDOM from "react-dom";

// function Newcomponent(){
//   return <h1>Hello</h1>
// }

const Newcomponent = () => {
  return React.createElement("h1", {}, "hello");
};

ReactDOM.render(<Newcomponent />, document.getElementById("root"));
