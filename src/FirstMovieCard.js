import React from "react";
import { useState } from "react";
import FirstMovieList from "./FirstMovieList";
function FirstMovieCard({ movies, onSelectedId }) {
  const [isOpen1, setIsOpen1] = useState(true);
  // const Handler3 = (id) => {
  //   onSelectedId(id);
  // };
  return (
    <>
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <FirstMovieList movies={movies} onSelectedId={onSelectedId} />
      )}
    </>
  );
}

export default FirstMovieCard;
