import { useEffect, useState } from "react";
import Nav from "./Nav";
import FirstMovieCard from "./FirstMovieCard";
import SecondMovieCard from "./SecondMovieCard";
import Loader from "./Loader";
import Box from "./Box";
import Error from "./Error";
// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];
// const KEY = "ae76cf74";
// const url = 'http://www.omdbapi.com/?apikey=ae76cf74&s=hukiokjukjh';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("interstellar");
  const [selectedId, setSelectedId] = useState(null);
  // const url = `https://www.omdbapi.com/?apikey=ae76cf74&s=${query}`;
  const Handler4 = (id) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  };
  const closeHandler = () => {
    setSelectedId(null);
  };

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://www.omdbapi.com/?apikey=ae76cf74&s=${query}`
          );

          const data = await res.json();

          if (data.Response === "False") {
            setError("Movie not found");
            return;
          }

          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
    },
    [query]
  );
  return (
    <>
      <Nav movies={movies} query={query} setQuery={setQuery} />
      <main className="main">
        <Box>
          {/* {isLoading ? <Loader /> : <FirstMovieCard movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <FirstMovieCard movies={movies} onSelectedId={Handler4} />
          )}
          {error && <Error message={error} />}
        </Box>
        <Box>
          <SecondMovieCard selectedId={selectedId} onClose={closeHandler} />
        </Box>
      </main>
    </>
  );
}
