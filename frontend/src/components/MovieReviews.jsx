import { Link } from "react-router-dom";
import MovieReviewsList from "./MovieReviewsList";

function MovieReviews({ movie, id }) {
  return (
    <div className="movie-reviews-container">
      <h2>Reviews</h2>
      <MovieReviewsList movie={movie} />
      <div className="read-all-reviews">
        <Link className="no-text-decoration" to={`/movie/${id}/reviews`}>
          <h3>Read all reviews</h3>
        </Link>
      </div>
    </div>
  );
}

export default MovieReviews;
