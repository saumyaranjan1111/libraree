import React from 'react'

function BookTable() {
  return (
    <div>
      <h1>Books</h1>
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
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <>
            <BookItem key={book.bookID} book={book} />
            <hr />
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookTable