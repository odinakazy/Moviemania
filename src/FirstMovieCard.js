import React from "react";
import { useState } from "react";
import FirstMovieList from "./FirstMovieList";
function FirstMovieCard(props) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <>
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <FirstMovieList movies={props.movies} />}
    </>
  );
}

export default FirstMovieCard;
