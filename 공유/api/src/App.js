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

    const response = await fetch("https://swapi.dev/api/films/", {
      method: "GET",
    })
    const data = await response.json();
      // .then((response) => {
      //   return response.json();
      // })
      // .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
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
      <Books></Books>
      <Books_test></Books_test>
    </React.Fragment>
  );
}

export default App;
