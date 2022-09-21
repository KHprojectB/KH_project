import React, { useState } from "react";

const BooksList = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieHandler = async () => {
    setIsLoading(true);

    const response = await fetch("https://futdb.app/api/player/", {
      method: "GET",
    })
    const data = await response.json();
      // .then((response) => {
      //   return response.json();
      // })
      // .then((data) => {
        const transformedMovies = data.items.map((movieData) => {
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
  }

  return (
    <h1>
      
    </h1>
  )
}

export default BooksList