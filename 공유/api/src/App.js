import React, { useState, useEffect } from "react";
import axios from 'axios';

import MoviesList from "./components/MoviesList";
import "./App.css";
import BooksList from "./components/BooksList";
import Books from "./components/Books";
import Books_test from "./components/Books_test/Books_test";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieHandler = async () => {
    setIsLoading(true);

    const response = await fetch("/web/book/list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data = await response.json();
    console.log(data)
      // .then((response) => {
      //   return response.json();
      // })
      // .then((data) => {
      setMovies(data);
      // });

      setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
      {/* <Books></Books>
      <Books_test></Books_test> */}
    </React.Fragment>
  );
}

export default App;
