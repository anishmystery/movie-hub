import SearchBar from "./SearchBar";

function HomePageHeader() {
  return (
    <div className="home-page-header">
      <SearchBar />
      <div className="home-page-header-content-wrapper">
        <div className="header-content">
          <h1>Welcome.</h1>
          <h1>
            Millions of movies, TV shows and people to discover. Explore now.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomePageHeader;
