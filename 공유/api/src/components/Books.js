import React, {useState, useEffect} from 'react'
import axios from 'axios';

import BooksList from './BooksList';

const Books = () => {

  const [books, setbooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBookHandler = async () => {
    setIsLoading(true);

    const response = await fetch("https://dapi.kakao.com/v3/search/book?target=title", {
      method: "GET",
    })
    const data = await response.json();
      // .then((response) => {
      //   return response.json();
      // })
      // .then((data) => {
        const transformedbooks = data.documents.map((bookData) => {
          return {
            key: bookData.isbn,
            id: bookData.url,
            title: bookData.title,
          };
        });
        setbooks(transformedbooks);
      // });

      setIsLoading(false);
  };

  return (
    <div>
      <BooksList
        key={books.isbn}
        id={books.url}
        title={books.title}
      ></BooksList>
    </div>
  )
}

export default Books