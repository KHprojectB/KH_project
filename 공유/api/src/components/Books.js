import React, {useState, useEffect} from 'react'
import axios from 'axios';

import BooksList from './BooksList';

const Books = () => {

  const [books, setbooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBookHandler = async () => {
    setIsLoading(true);

    const response = await fetch("/web/book/list", {
      method: "GET",
    })
    const data = await response.json();
      // .then((response) => {
      //   return response.json();
      // })
      // .then((data) => {
        const transformedbooks = data.map((bookData) => {
          return {
            key: bookData.bookId,
            name: bookData.bookName,
          };
        });
        setbooks(transformedbooks);
      // });

      setIsLoading(false);
  };

  return (
    <div>
      <BooksList
        key={books.key}
        title={books.name}
      ></BooksList>
    </div>
  )
}

export default Books