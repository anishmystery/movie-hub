import ReviewItem from "./ReviewItem";

function ReviewsList({ reviews, onRemoveReview }) {
  return (
    <div className="reviews-list">
      <h2>Reviews</h2>
      {reviews?.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
          onRemoveReview={onRemoveReview}
        />
      ))}
    </div>
  );
}

export default ReviewsList;
