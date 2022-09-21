import { useState } from "react";
import axios from "axios";

const url = "/web/book/list";

const Books_test = () => {


  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBooksData = async () => {
    try {
      const res = await axios.get(url, {
        headers: {"Content-Type": "application/json"}
      });
      const data = res.json();
      console.log(data);
    } catch (error) {}
  };

  // const fetchBookHandler = async () => {
  //   setIsLoading(true);

  //   fetch("/web/login/login", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.clone().json());
  //       setIsLoading(false);
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         return res.json().then((data) => {
  //           let errorMessage = "로그인 오류";
  //           // if (data && data.error && data.error.message) {
  //           //   errorMessage = data.error.message;
  //           // }
  //           throw new Error(errorMessage);
  //         });
  //       }
  //     })

  //     setIsLoading(false);
  // };

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
