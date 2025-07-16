import MovieReviewItem from "./MovieReviewItem";

function MovieReviewsList({ movie }) {
  return (
    <div className="reviews-list">
      {movie.reviews.map((review) => (
        <MovieReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

export default MovieReviewsList;
