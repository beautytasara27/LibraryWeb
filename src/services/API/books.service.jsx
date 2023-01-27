async function GetBooksBySubject({ subject }) {
  try {
    const response = await fetch(
      `https://openlibrary.org/subjects/${subject}.json?published_in=2021-2023`,
      {
        method: "GET",
      }
    );
    return response.json();
  } catch (error) {
    return error.json();
  }
}
async function GetBooksByAuthor() {
    try {
      const response = await fetch(
        `https://openlibrary.org/search/authors.json?q=dan%20brown`,
        {
          method: "GET",
        }
      );
      return response.json();
    } catch (error) {
      return error.json();
    }
  }
  async function GetBooksByKeywords() {
    try {
      const response = await fetch(
        `https://openlibrary.org/search/authors.json?q=dan%20brown`,
        {
          method: "GET",
        }
      );
      return response.json();
    } catch (error) {
      return error.json();
    }
  }
const BookService = {
GetBooksBySubject,
GetBooksByAuthor,
GetBooksByKeywords
}
export default BookService;