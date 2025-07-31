import { Link } from "react-router-dom";

function AppBar() {
  return (
    <div className="app-bar">
      <Link to="/" className="no-text-decoration">
        <div className="app-logo">
          <p className="app-icon">🍿</p>
          <p>MovieHub</p>
        </div>
      </Link>
      <div className="nav-wrapper">
        <ul className="nav-links">
          <li className="dropdown">
            Movies
            <ul className="dropdown-list">
              <Link to={"/movies/top-rated"} className="no-text-decoration">
                <li>Top Rated</li>
              </Link>
              <Link to={"/movies/popular"} className="no-text-decoration">
                <li>Popular</li>
              </Link>
            </ul>
          </li>
          <li className="dropdown">
            TV Shows
            <ul className="dropdown-list">
              <Link to={"/tv/top-rated"} className="no-text-decoration">
                <li>Top Rated</li>
              </Link>
              <Link to={"/tv/popular"} className="no-text-decoration">
                <li>Popular</li>
              </Link>
            </ul>
          </li>
          <li className="dropdown">
            People
            <ul className="dropdown-list">
              <Link to={"/people/popular"} className="no-text-decoration">
                <li>Popular</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
      <ul className="nav-links">
        <li className="dropdown">
          Profile
          <ul className="dropdown-list-profile">
            <Link to={"/user/u1"} className="no-text-decoration">
              <li>View Profile</li>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default AppBar;
