function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <div className="review-header">
        <img src={review.authorDetails.avatarPath} width={45} height={45} />
        <div className="review-metadata">
          <h2>A review by {review.author}</h2>
          <div className="review-subtitle">
            <p>{review.authorDetails.rating}%</p>
            <p>
              Written by <strong>{review.author}</strong> on{" "}
              <em>{review.createdAt}</em>
            </p>
          </div>
        </div>
      </div>
      <div className="review-body">
        <p>{review.content}</p>
      </div>
    </div>
  );
}

export default ReviewItem;
