import React from "react";
import WatchedMovie from "./WatchedMovie";
function WatchedList(props) {
  return (
    <ul className="list">
      {props.watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedList;
