import React, { useState, useRef } from "react";
import axios from "axios";
import { useCartContext } from "../../store/cart-context";
import {useNavigate} from "react-router-dom"

import "./Products.css";
import { FaSearch } from "react-icons/fa";

const url = "https://dapi.kakao.com/v3/search/book";

const Products = () => {

  const history = useNavigate();

  const {addToCart} = useCartContext();


  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");

  const inputRef = useRef();

  const fetchBooksData = async () => {
    try {
      const res = await axios(url, {
        method: "get",
        headers: {
          Authorization: "KakaoAK 7becfcdd336e73a6c7bfe024ce5670a6",
        },
        params: {
          query: input,
        },
      });
      const data = res.data.documents;
      setBooks(data);
      console.log(data);
    } catch (error) {}
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const input = inputRef.current.value;

    setInput(input);
  };
  
  const addToCartHandler = () => {
    addToCart(books.isbn, books.price, books);
    history("/cart")
  }

  return (
    <div className="product-container">
      <div className="products-form">
        <h3>원하는 책을 검색해보세요</h3>
        <form className="form" onSubmit={submitHandler}>
          <label htmlFor="product-input"></label>
          <input type="text" id="product-input" ref={inputRef}></input>
          <button className="form-btn" onClick={fetchBooksData}>
            <FaSearch></FaSearch>
          </button>
        </form>
      </div>
      <div className="products-list">
        {books.map((book) => {
          return (
            <div>
              <div className="single-product-container">
                <img src={book.thumbnail}></img>
              </div>
              <footer>
                <h5>{book.title}</h5>
                <p>{book.price > 12000 ? "대여불가능" : "대여가능"}</p>
                <button onClick={addToCartHandler}>add to cart</button>
              </footer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
