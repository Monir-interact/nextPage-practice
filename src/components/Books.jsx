import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  // const [books, setBooks] = useState([])

  // useEffect(() =>{
  //     fetch('https://api.itbook.store/1.0/new')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // },[])
  // use Loader
  const { books } = useLoaderData();
  console.log(books);

  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
          <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2">
            <img
              src={book.image}
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />
            <div className="bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-200 absolute inset-0">
                <p>{book.title}</p>
                <br />
                <p>{book.subtitle}</p>
                <br />
                <p>Price: {book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
