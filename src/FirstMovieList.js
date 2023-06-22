import React from "react";
import Movie from "./Movie";
function FirstMovieList({ movies, onSelectedId }) {
  // const Handler2 = (id) => {
  //   onSelectedId(id);
  // };
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movies={movie} onSelectedId={onSelectedId} />
      ))}
    </ul>
  );
}

export default FirstMovieList;
