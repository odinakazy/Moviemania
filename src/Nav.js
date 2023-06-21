import React from "react";
import { useState } from "react";
function Nav(props) {
  const [query, setQuery] = useState("");
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
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results">
        Found <strong>{props.movies.length}</strong> results
      </p>
    </nav>
  );
}

export default Nav;
