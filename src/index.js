import React from "react";
import ReactDOM from "react-dom";

// JSX Rules
// return single element
// div/section/artical or fragment
// use CamelCase for HTML elements
// classname instead of class
// close every element

const Newcomponent = () => {
  return React.createElement("h1", {}, "hello");
};

ReactDOM.render(<Newcomponent />, document.getElementById("root"));
