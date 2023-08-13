import React, { useState, useEffect } from "react";
import axios from "axios";
import BookItem from "../components/BookItem"; // Adjust the path as needed
import "./Books.css"; // Import your custom CSS file for styling
import { BrowserRouter, Router, Routes, Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(""); // Page number input
  const [title, setTitle] = useState(""); // Title input
  const [authors, setAuthors] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get("http://localhost:3001/api/books")
      .then((response) => {
        // console.log(response.data);
        // Sort the books array alphabetically by title
        const sortedBooks = response.data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setBooks(sortedBooks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleAddBooks = () => {
    console.log(
      `http://localhost:3001/api/books/add?page=${page}&title=${title}&authors=${authors}&isbn=${isbn}&publisher=${publisher}`
    );
    axios
      .get(
        `http://localhost:3001/api/books/add?page=${page}&title=${title}&authors=${authors}&isbn=${isbn}&publisher=${publisher}`
      )
      .then((response) => {
        console.log("Books added successfully:", response.data);
        fetchBooks();
      })
      .catch((error) => {
        console.error("Error adding books:", error);
      });
  };
  return (
    <div>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/catalog">Catalog</Link>
              </li>
              <li>
                <Link to="/my-account">My Account</Link>
              </li>
            </ul>
          </nav>
          <div className="user-actions">
            <button className="action-button">
              <Link to="/login">Admin Login</Link>
            </button>
            <button className="action-button">
              <Link to="/sign-up">Create Admin</Link>
            </button>
          </div>
        </header>
      </div>

      <div className="books-container">
        <div className="add-books">
          <div className="book-details">
            <div className="book-title">
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="isbn">
              <label>ISBN:</label>
              <input
                type="text"
                value={isbn}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="authors">
              <label>Authors:</label>
              <input
                type="text"
                value={authors}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="publisher">
              <label>Publisher:</label>
              <input
                type="text"
                value={publisher}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleAddBooks}>Add Books</button>
        </div>

        <h1>Available Books</h1>
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author(s)</th>
              <th>Average Rating</th>
              <th>ISBN</th>
              <th>Language</th>
              <th>Number of Pages</th>
              <th>Ratings Count</th>
              <th>Text Reviews Count</th>
              <th>Publication Date</th>
              <th>Publisher</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <>
                <BookItem key={book.bookID} book={book} />
                <hr />
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Books;
