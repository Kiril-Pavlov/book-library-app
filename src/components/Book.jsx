import React from "react";

const Book = ({ title, author, genre }) => {
  return (
    <div className="book">
      <div className="book__frame">
        <div className="book__author">{author}</div>
        <div className="book__title">{title}</div>
        <div className="book__genre">{genre}</div>
      </div>
    </div>
  );
};

export default Book;
