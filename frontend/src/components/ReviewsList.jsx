import ReviewItem from "./ReviewItem";

function ReviewsList({ reviews }) {
  return (
    <div className="reviews-list">
      <h2>Reviews</h2>
      {reviews?.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewsList;
