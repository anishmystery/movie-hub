import { useNavigate, useParams } from "react-router-dom";
import FullCreditsHeader from "../components/FullCreditsHeader";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ReviewsList from "../components/ReviewsList";
import AddReviewModal from "../components/AddReviewModal";

function ReviewsPage({ titleType }) {
  const { id } = useParams();
  const [title, setTitle] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getTitleDetails() {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/${titleType}/${id}`
        );
        setTitle(res.data);
        setReviews(res.data.reviews);
      } catch (err) {
        console.error(err);
      }
    }
    getTitleDetails();
  }, [id, titleType]);

  function handleBack() {
    navigate(-1);
  }

  function handleAddReview(review) {
    setReviews((reviews) => [...reviews, review]);
  }

  async function handleRemoveReview(reviewId, userId) {
    try {
      await axios.delete(
        `http://localhost:5001/api/${titleType}/${id}/reviews`,
        {
          data: {
            reviewId: reviewId,
            userId: userId,
          },
        }
      );
      setReviews((prev) =>
        prev.filter(
          (review) =>
            review.id !== reviewId || review.authorDetails.userId !== userId
        )
      );
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="reviews-page">
      <FullCreditsHeader title={title} onBack={handleBack} />
      <div className="reviews-container">
        <div className="write-review">
          <button onClick={() => setIsModalOpen(true)}>
            ✏️ Write a review
          </button>
        </div>
        <ReviewsList reviews={reviews} onRemoveReview={handleRemoveReview} />
      </div>
      {isModalOpen && (
        <AddReviewModal
          id={id}
          titleType={titleType}
          onAddReview={handleAddReview}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default ReviewsPage;
