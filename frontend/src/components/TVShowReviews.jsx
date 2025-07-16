import TVShowReviewsList from "./TVShowReviewsList";

function TVShowReviews({ tvShow }) {
  return (
    <div className="movie-reviews-container">
      <h2>Reviews</h2>
      <TVShowReviewsList tvShow={tvShow} />
    </div>
  );
}

export default TVShowReviews;
