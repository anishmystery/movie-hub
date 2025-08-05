import axios from "axios";
import { useState } from "react";

function AddReviewModal({ id, titleType, onAddReview, onClose }) {
  const [content, setContent] = useState("");

  function handleChangeContent(e) {
    setContent(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:5001/api/${titleType}/${id}/reviews`,
        {
          id: id,
          content,
          author: "User Name 1",
          authorDetails: {
            userId: "u1",
            avatarPath: "https://placehold.co/45x45",
            rating: 80,
          },
        }
      );
      onAddReview(res.data.review);
      onClose();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Review</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your review..."
            rows={5}
            onChange={handleChangeContent}
            value={content}
          />
          <div className="modal-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddReviewModal;
