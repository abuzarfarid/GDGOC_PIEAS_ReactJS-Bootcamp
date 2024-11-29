import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  const addBorrowedBook = (title) => {
    setBorrowedBooks((prev) => [...prev, title]);
  };

  const addFavBook = (title) => {
    setFavBooks((prev) => [...prev, title]);
  };

  return (
    <BooksContext.Provider
      value={{ borrowedBooks, favBooks, addBorrowedBook, addFavBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
