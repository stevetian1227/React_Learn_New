import React from "react";
import ReactDOM from "react-dom";

// JSX Rules
// return single element
// div/section/artical or fragment
// use CamelCase for HTML elements
// classname instead of class
// close every element

import "./index.css";

// import var need {}
// import component doesn't need {}
// default export can name different in other files while normal var export need to be the same name as the that one
import { books } from "./books";
import Book from "./Book";

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        //const { img, author, title } = book;
        // return <Book key={book.id} book={book}></Book>;

        // spread operater to pass as prop
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
