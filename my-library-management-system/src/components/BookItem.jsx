import React from 'react';

function BookItem({ book }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.authors}</td>
      <td>{book.average_rating}</td>
      <td>{book.isbn}</td>
      <td>{book.language_code}</td>
      <td>{book.num_pages}</td>
      <td>{book.ratings_count}</td>
      <td>{book.text_reviews_count}</td>
      <td>{book.publication_date}</td>
      <td>{book.publisher}</td>
      <td>{book.available_count}</td>
    </tr>
  );
}

export default BookItem;
