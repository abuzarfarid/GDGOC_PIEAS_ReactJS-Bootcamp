import React from "react";
import BookCard from "./BookCard";
import { Books } from "../data/books";

const BookDetails = () => {
  return (
    <div>
      <h2>All Books</h2>
      {Books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookDetails;
