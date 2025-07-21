import { Link } from "react-router-dom";
import TVShowReviewsList from "./TVShowReviewsList";

function TVShowReviews({ tvShow, id }) {
  return (
    <div className="movie-reviews-container">
      <h2>Reviews</h2>
      <TVShowReviewsList tvShow={tvShow} />
      <div className="read-all-reviews">
        <Link className="no-text-decoration" to={`/tv/${id}/reviews`}>
          <h3>Read all reviews</h3>
        </Link>
      </div>
    </div>
  );
}

export default TVShowReviews;
