import React from "react";
import HighRatedBooks from "./components/HighRatedBooks";
import BookDetails from "./components/BookDetails";
import FictionBooks from "./components/FictionBooks";
import BookAuthors from "./components/BookAuthors";

const App = () => {
  return (
    <div className="App">
      <h1>Library Manager</h1>
      <HighRatedBooks />
      <FictionBooks />
      <BookAuthors />
      <BookDetails />
    </div>
  );
};

export default App;
