import React from "react";

function Movie(props) {
  return (
    <li key={props.movies.imdbID}>
      <img src={props.movies.Poster} alt={`${props.movies.Title} poster`} />
      <h3>{props.movies.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{props.movies.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
