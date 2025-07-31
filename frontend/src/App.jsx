import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import TVShowDetailsPage from "./pages/TVShowDetailsPage";
import PeoplePage from "./pages/PeoplePage";
import LoginPage from "./pages/LoginPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SignupPage from "./pages/SignupPage";
import FullCreditsPage from "./pages/FullCreditsPage";
import ReviewsPage from "./pages/ReviewsPage";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import TopRatedTVShowsPage from "./pages/TopRatedTVShowsPage";
import PopularTVShowsPage from "./pages/PopularTVShowsPage";
import PopularPeoplePage from "./pages/PopularPeoplePage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<HomePage />}></Route>

      {/* App Bar Navigation Routes */}
      <Route path="/movies/top-rated" element={<TopRatedMoviesPage />}></Route>
      <Route path="/movies/popular" element={<PopularMoviesPage />}></Route>
      <Route path="/tv/top-rated" element={<TopRatedTVShowsPage />}></Route>
      <Route path="/tv/popular" element={<PopularTVShowsPage />}></Route>
      <Route path="/people/popular" element={<PopularPeoplePage />}></Route>

      {/* Search Route */}
      <Route path="/search" element={<SearchResultsPage />}></Route>

      {/* Movie Routes */}
      <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
      <Route
        path="/movie/:id/full-credits"
        element={<FullCreditsPage titleType="movie" />}
      ></Route>
      <Route
        path="/movie/:id/reviews"
        element={<ReviewsPage titleType="movie" />}
      ></Route>

      {/* TV Routes */}
      <Route path="/tv/:id" element={<TVShowDetailsPage />}></Route>
      <Route
        path="/tv/:id/full-credits"
        element={<FullCreditsPage titleType="tv" />}
      ></Route>
      <Route
        path="/tv/:id/reviews"
        element={<ReviewsPage titleType="tv" />}
      ></Route>

      {/* Person Route */}
      <Route path="/person/:id" element={<PeoplePage />}></Route>

      {/* Authentication Routes */}
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>

      {/* User Route */}
      <Route path="/user/:id" element={<UserProfilePage />}></Route>

      {/* 404 Route */}
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
