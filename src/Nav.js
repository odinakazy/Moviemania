import React, { useEffect } from "react";
import { useRef } from "react";
function Nav({ query, setQuery, movies }) {
  const inputRef = useRef();
  useEffect(function () {
    inputRef.current?.focus();
  }, []);

  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>Moviemania</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        ref={inputRef}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}

export default Nav;
