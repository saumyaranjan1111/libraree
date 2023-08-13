const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import Mongoose
const Book = require('./models/Book'); // Import the Book model

require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Define your MongoDB Atlas connection URL
const uri = process.env.URI;

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

  app.get('/api/books', async(req, res) => {
    try {
        const availableBooks = await Book.find({});
        res.json(availableBooks);

    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Error fetching books' });
    }
  })
  app.get('/api/books/add', async (req, res) => {
    try {
        const page = req.query.page ? `page=${req.query.page}`: "";
        const title = req.query.title ? `title=${req.query.title}`: "";
        const authors = req.query.authors ? `authors=${req.query.authors}` : "";
        const isbn = req.query.isbn ?  `isbn=${req.query.isbn}` : "";
        const publisher = req.query.publisher ?  `publisher=${req.query.publisher}` :  "";

        const apiurl = `https://frappe.io/api/method/frappe-library?${page}&${title}&${authors}&${isbn}&${publisher}`;

        console.log(apiurl);

        const response = await axios.get(
          apiurl
        );
    // It accepts title , authors , isbn , publisher and page as parameters.
        const fetchedBooks = response.data.message;
          // console.log(fetchedBooks);

        // Process each book from the fetchedBooks array
        for (const book of fetchedBooks) {
          // Find the book by its bookID in the collection
          const existingBook = await Book.findOne({ bookID: book.bookID });
    
          if (existingBook) {
            // If the book already exists, increment its available_count
            existingBook.available_count += 1;
            await existingBook.save();
          } else {
            // If the book doesn't exist, insert it with available_count set to 1
            await Book.create({
              ...book,
              available_count: 1
            });
          }
        }
    
        res.json(fetchedBooks);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching data from the API' });
      }
  });

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
