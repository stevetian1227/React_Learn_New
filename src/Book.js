//The component for book object
import React from "react";

const Book = ({ img, author, title }) => {
  const handleClick = (event) => {
    console.log(event.target);
    alert("Click");
  };
  // const { img, author, title } = props;
  return (
    <article className="book">
      <h2>{title}</h2>
      <h4>{author}</h4>
      <img src={img} alt="" />
      <button type="button" onClick={handleClick}>
        Click here
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(author);
        }}
      >
        More complex example
      </button>
    </article>
  );
};

export default Book;
