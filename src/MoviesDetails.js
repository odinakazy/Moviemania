import React, { useEffect } from "react";
import { useState, useLayoutEffect } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
function MoviesDetails({ selectedId, onClose, onAddWatchMovie, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const isWatchedRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useLayoutEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=ae76cf74&i=${selectedId}`
        );

        const data = await res.json();
        console.log(data);
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );
  useEffect(() => {
    document.title = title;

    return () => {
      // Perform cleanup tasks here
      document.title = "Moviemania App";
    };
  }, [title]);
  const rateHandler = (rate) => {
    setUserRating(rate);
  };
  const addWatchMoviesHandler = () => {
    const newWatchedMovies = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: +imdbRating,
      runtime: +runtime.split(" ").at(0),
      userRating,
    };
    onAddWatchMovie(newWatchedMovies);
    onClose();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="details">
          <header>
            <button className="btn-back" onClick={onClose}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
              <p>
                <span>🗓</span>
                <span>{year}</span>
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={5}
                    color="#fcc419"
                    onRating={rateHandler}
                  />

                  {userRating > 0 && (
                    <button className="btn-add" onClick={addWatchMoviesHandler}>
                      Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  you rated this movie <span>{isWatchedRating}</span>{" "}
                  <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </div>
      )}
    </>
  );
}

export default MoviesDetails;
