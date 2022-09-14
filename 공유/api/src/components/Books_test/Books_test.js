import { useState } from "react";
import axios from "axios";

const url = "https://dapi.kakao.com/v3/search/book";

const Books_test = () => {
  const [books, setBooks] = useState([]);

  const fetchBooksData = async () => {
    try {
      const res = await axios(url, {
        method: "get",
        headers: {
          Authorization: "KakaoAK 7becfcdd336e73a6c7bfe024ce5670a6",
        },
        params: {
          query: "0",
        },
      });
      const data = res.data.documents;
      setBooks(data);
      console.log(data);
    } catch (error) {}
  };

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchBooksData}>
        Books
      </button>
      <h1 className="book-text">{books.map((book) => {
        return (
          <p>{book.title}</p>
        )
      })}</h1>
    </section>
  );
};
export default Books_test;
