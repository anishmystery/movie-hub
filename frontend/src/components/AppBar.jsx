import { Link } from "react-router-dom";

function AppBar() {
  return (
    <div className="app-bar">
      <div className="nav-wrapper">
        <Link to="/" className="no-text-decoration">
          <div className="app-logo">
            <p className="app-icon">🍿</p>
            <p>MovieHub</p>
          </div>
        </Link>
        <ul className="nav-links">
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
        </ul>
      </div>
      <ul className="nav-links">
        <li>Profile</li>
        <li>🔎</li>
      </ul>
    </div>
  );
}

export default AppBar;
