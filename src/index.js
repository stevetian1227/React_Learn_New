import React from "react";
import ReactDOM from "react-dom";

// JSX Rules
// return single element
// div/section/artical or fragment
// use CamelCase for HTML elements
// classname instead of class
// close every element

import "./index.css";

//setup vars

const books = [
  {
    id: 0,
    img: "https://images-na.ssl-images-amazon.com/images/I/71fXg7UX5+L._AC._SR360,460.jpg",
    author: "Author Name2",
    title: "Book Title2",
  },
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51eO828JvzL._AC._SR360,460.jpg",
    author: "Author Name",
    title: "Book Title",
  },
];

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

const Book = (props) => {
  const { img, author, title } = props;
  return (
    <article className="book">
      <h2>{title}</h2>
      <h4>{author}</h4>
      <img src={img} alt="" />
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
