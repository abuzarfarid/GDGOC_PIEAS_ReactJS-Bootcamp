import React from "react";
import { BooksProvider } from "./context/BooksContext";
import BookList from "./components/BookList";
import BorrowedBooks from "./components/BorrowedBooks";
import FavBooks from "./components/FavBooks";

const App = () => {
  return (
    <BooksProvider>
      <div>
        <h1>Library Manager</h1>
        <BookList />
        <BorrowedBooks />
        <FavBooks />
      </div>
    </BooksProvider>
  );
};

export default App;
