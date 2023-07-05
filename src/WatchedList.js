import React from "react";
import WatchedMovie from "./WatchedMovie";
function WatchedList(props) {
  const deleteMovie = (id) => {
    props.onDelete(id);
  };
  return (
    <ul className="list">
      {props.watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} onDelete={deleteMovie} />
      ))}
    </ul>
  );
}

export default WatchedList;
