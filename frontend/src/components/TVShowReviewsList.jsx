import TVShowReviewItem from "./TVShowReviewItem";

function TVShowReviewsList({ tvShow }) {
  return (
    <div className="reviews-list">
      {tvShow.reviews.map((review) => (
        <TVShowReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

export default TVShowReviewsList;
