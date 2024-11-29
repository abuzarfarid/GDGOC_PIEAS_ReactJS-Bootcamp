import React from "react";
import Button from "./Button";

const BookCard = ({ title }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <Button title={title} />
    </div>
  );
};

export default BookCard;
