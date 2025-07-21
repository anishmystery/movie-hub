import { useNavigate, useParams } from "react-router-dom";
import FullCreditsHeader from "../components/FullCreditsHeader";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ReviewsList from "../components/ReviewsList";

function ReviewsPage({ titleType }) {
  const { id } = useParams();
  const [title, setTitle] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    async function getTitleDetails() {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/${titleType}/${id}`
        );
        console.log(res.data);
        setTitle(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getTitleDetails();
  }, [id, titleType]);

  function handleBack() {
    navigate(-1);
  }
  return (
    <div className="reviews-page">
      <FullCreditsHeader title={title} onBack={handleBack} />
      <div className="reviews-container">
        <div className="write-review">
          <h3>✏️ Write a review</h3>
        </div>
        <ReviewsList reviews={title.reviews} />
      </div>
    </div>
  );
}

export default ReviewsPage;
