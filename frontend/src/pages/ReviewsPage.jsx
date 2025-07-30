import { useNavigate, useParams } from "react-router-dom";
import FullCreditsHeader from "../components/FullCreditsHeader";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ReviewsList from "../components/ReviewsList";

function ReviewsPage({ titleType }) {
  const { id } = useParams();
  const [title, setTitle] = useState({});
  const [reviews, setReviews] = useState([]);
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

  async function handleAddReview() {
    try {
      const res = await axios.post(
        `http://localhost:5001/api/${titleType}/${id}/reviews`,
        {
          id: id,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam ab omnis hic, quia aperiam blanditiis quasi quisquam natus animi. Illum molestiae fugit deleniti nesciunt quaerat perferendis, hic blanditiis quo!",
          author: "User Name 1",
          authorDetails: {
            username: "test@test.com",
            avatarPath: "https://placehold.co/45x45",
            rating: 80,
          },
        }
      );
      setReviews((reviews) => [...reviews, res.data.review]);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="reviews-page">
      <FullCreditsHeader title={title} onBack={handleBack} />
      <div className="reviews-container">
        <div className="write-review">
          <button onClick={handleAddReview}>✏️ Write a review</button>
        </div>
        <ReviewsList reviews={reviews} />
      </div>
    </div>
  );
}

export default ReviewsPage;
