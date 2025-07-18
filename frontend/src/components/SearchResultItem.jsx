import { Link } from "react-router-dom";

function SearchResultItem({ result, selectedType }) {
  return (
    <>
      {selectedType === "people" ? (
        <Link to={`/person/${result.id}`} className="no-text-decoration">
          <div className="search-result-people-item">
            <div className="search-result-people-poster-wrapper">
              <img
                className="search-result-people-poster"
                src="https://placehold.co/66x66"
              />
            </div>
            <div className="search-result-people-content">
              <h3>{result.name}</h3>
              <p>{result.knownForDepartment}</p>
            </div>
          </div>
        </Link>
      ) : (
        <Link
          to={
            selectedType === "movies"
              ? `/movie/${result.id}`
              : `/tv/${result.id}`
          }
          className="no-text-decoration"
        >
          <div className="search-result-item">
            <div className="search-result-poster-wrapper">
              <img
                className="search-result-poster"
                src="https://placehold.co/90x141"
              />
            </div>
            <div className="search-result-content">
              <div className="content-header">
                <h3>{result.title || result.name}</h3>
                <p>{result.releaseDate || result.firstAirDate}</p>
              </div>
              <p>{result.overview}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default SearchResultItem;
