import React from "react";
import BookCard from "./BookCard";
import { Books } from "../data/books";

const FictionBooks = () => {
  const fiction = Books.filter((book) => book.genre === "fiction");

  return (
    <div>
      <h2>Fiction Books</h2>
      {fiction.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default FictionBooks;
