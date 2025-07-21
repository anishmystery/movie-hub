import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import TVShowDetailsPage from "./pages/TVShowDetailsPage";
import PeoplePage from "./pages/PeoplePage";
import LoginPage from "./pages/LoginPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SignupPage from "./pages/SignupPage";
import FullCastCrewPage from "./pages/FullCreditsPage";
import FullCreditsPage from "./pages/FullCreditsPage";
import ReviewsPage from "./pages/ReviewsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/search" element={<SearchResultsPage />}></Route>
      <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
      <Route
        path="/movie/:id/full-credits"
        element={<FullCreditsPage titleType="movie" />}
      ></Route>
      <Route
        path="/movie/:id/reviews"
        element={<ReviewsPage titleType="movie" />}
      ></Route>
      <Route path="/tv/:id" element={<TVShowDetailsPage />}></Route>
      <Route
        path="/tv/:id/full-credits"
        element={<FullCreditsPage titleType="tv" />}
      ></Route>
      <Route
        path="/tv/:id/reviews"
        element={<ReviewsPage titleType="tv" />}
      ></Route>
      <Route path="/person/:id" element={<PeoplePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>

      <Route
        path="*"
        element={
          <div>
            <h1>404 Page Not Found</h1>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
