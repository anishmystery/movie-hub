import SearchResultItem from "./SearchResultItem";

function SearchResultsList({ searchResult, selectedType }) {
  return (
    <div className="search-results-list">
      {searchResult[selectedType]?.map((result, idx) => (
        <SearchResultItem
          key={idx}
          result={result}
          selectedType={selectedType}
        />
      ))}
    </div>
  );
}

export default SearchResultsList;
