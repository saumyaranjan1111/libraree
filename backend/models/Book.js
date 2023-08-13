// models/Book.js

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookID: {
    type: String,
    unique: true // Ensure uniqueness of bookID
  },
  title: String,
  authors: String,
  average_rating: String,
  isbn: String,
  isbn13: String,
  language_code: String,
  num_pages: String,
  ratings_count: String,
  text_reviews_count: String,
  publication_date: String,
  publisher: String,
  available_count: {
    type: Number,
    default: 1 // Set a default value
  }
});

// Custom method to update or insert book based on bookID
bookSchema.statics.updateOrInsertByBookID = async function(bookID, newData) {
  try {
    const query = { bookID };
    const options = { upsert: true }; // Update or insert

    await this.updateOne(query, newData, options);
  } catch (error) {
    console.error('Error updating/inserting book:', error);
  }
};

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
