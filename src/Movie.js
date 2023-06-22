import React from "react";

function Movie({ movies, onSelectedId }) {
  // const Handler = () => {
  //   props.onSelectedId(props.movies.imdbID);
  // };
  return (
    <li key={movies.imdbID} onClick={() => onSelectedId(movies.imdbID)}>
      <img src={movies.Poster} alt={`${movies.Title} poster`} />
      <h3>{movies.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movies.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
