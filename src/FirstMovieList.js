import React from "react";
import Movie from "./Movie";
function FirstMovieList(props) {
  return (
    <ul className="list">
      {props.movies?.map((movie) => (
        <Movie key={movie.imdbID} movies={movie} />
      ))}
    </ul>
  );
}

export default FirstMovieList;
