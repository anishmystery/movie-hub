import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchResultsStats from "../components/SearchResultsStats";
import SearchResultsList from "../components/SearchResultsList";

function SearchResultsPage() {
  const [searchResult, setSearchResult] = useState({});
  const [selectedType, setSelectedType] = useState("movies");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  useEffect(() => {
    async function getSearchResults() {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/search?query=${query}`
        );
        console.log(res.data);
        setSearchResult(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getSearchResults();
  }, [query]);

  function handleChangeSelectedType(type) {
    setSelectedType(type);
  }

  return (
    <div className="search-results-page">
      <div className="search-results-container">
        <SearchResultsStats
          searchResult={searchResult}
          selectedType={selectedType}
          onChangeSelectedType={handleChangeSelectedType}
        />
        <SearchResultsList
          searchResult={searchResult}
          selectedType={selectedType}
        />
      </div>
    </div>
  );
}

export default SearchResultsPage;
