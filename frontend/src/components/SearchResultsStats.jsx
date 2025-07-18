function SearchResultsStats({
  searchResult,
  selectedType,
  onChangeSelectedType,
}) {
  return (
    <div className="search-results-stats-container">
      <h3 className="search-results-stats-header">Search Results</h3>
      <ul className="search-results-stats-list">
        {Object.keys(searchResult).map((key, idx) => (
          <li
            key={idx}
            className={
              selectedType === key ? "selected-stat-item" : "stat-item"
            }
            onClick={() => onChangeSelectedType(key)}
          >
            <p className="stat-title">
              {key === "tv" ? key.toUpperCase() + " SHOWS" : key.toUpperCase()}
            </p>
            <p
              className={
                selectedType === key ? "selected-stat-number" : "stat-number"
              }
            >
              {searchResult[key]?.length}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsStats;
