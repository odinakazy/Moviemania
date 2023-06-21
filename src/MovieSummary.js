import React from "react";

function MovieSummary(props) {
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{props.watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{props.avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{props.avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{props.avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

export default MovieSummary;
