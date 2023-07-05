import React from "react";

function WatchedMovie(props) {
  const onDeleteHndler = () => {
    props.onDelete(props.movie.imdbID);
  };
  return (
    <li>
      <img src={props.movie.poster} alt={`${props.movie.title} poster`} />
      <h3>{props.movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{props.movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{props.movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{props.movie.runtime} min</span>
        </p>
        <button onClick={onDeleteHndler} className="btn-delete">
          X
        </button>
      </div>
    </li>
  );
}

export default WatchedMovie;
