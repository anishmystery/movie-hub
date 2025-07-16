import MovieReviewsList from "./MovieReviewsList";

function MovieReviews({ movie }) {
  return (
    <div className="movie-reviews-container">
      <h2>Reviews</h2>
      <MovieReviewsList movie={movie} />
    </div>
  );
}

export default MovieReviews;
