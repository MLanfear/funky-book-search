// OLD API ROUTES

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};

module.exports = searchGoogleBooks;
