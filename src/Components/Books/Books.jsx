import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])
  return (
    <div className="w-11/12 mx-auto mb-10">
     <div className="mb-10">
     <h2 className="font-bold text-4xl text-center">Books</h2>
     </div>

        <div className="m-0 p-0 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            books.map(book => <Book key={book.bookId} book={book}></Book>)
          }
        </div>
    </div>
  );
};

export default Books;