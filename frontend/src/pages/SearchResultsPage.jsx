import axios from "axios";
import { useEffect } from "react";

function SearchResultsPage() {
  useEffect(() => {
    async function getSearchResults() {
      try {
        const res = await axios.get("http://localhost:5001/api/search");
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getSearchResults();
  }, []);
  return (
    <div>
      <h1>Search Results</h1>
    </div>
  );
}

export default SearchResultsPage;
