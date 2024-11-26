//Importing the Books array
import Books from './books.js';

//Writing functions using map/filter

//Print book titles with rating higher than 4.5
const highRatedBooks = () => {
    const titles = Books.filter(book => book.rating > 4.5).map(book => book.title);
    console.log("Books with rating higher than 4.5:", titles);
};

//Iterate over books and print details using destructuring
const printBookDetails = () => {
    Books.forEach(({ title, author, rating, genre }) => {
        console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    });
};

//Print book titles with the genre "fiction"
const fictionBooks = () => {
    const titles = Books.filter(book => book.genre.toLowerCase() === "fiction").map(book => book.title);
    console.log("Fiction books:", titles);
};

//Display an array of book authors
const listAuthors = () => {
    const authors = Books.map(book => book.author);
    console.log("Authors:", authors);
};

//Calling the functions to display results
highRatedBooks();
printBookDetails();
fictionBooks();
listAuthors();
