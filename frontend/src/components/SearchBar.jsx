import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?query=${encodeURIComponent(query.trim())}`);
  }
  return (
    <div className="search-container">
      <span>🔎</span>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a movie, tv show, person..."
          onChange={handleChangeQuery}
          value={query}
        />
      </form>
    </div>
  );
}

export default SearchBar;
