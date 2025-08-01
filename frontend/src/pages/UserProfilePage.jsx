import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UserProfileHeader from "../components/UserProfileHeader";
import Watchlist from "../components/Watchlist";

function UserProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [watchlistDetails, setWatchlistDetails] = useState([]);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get(`http://localhost:5001/api/user/${id}`);
        setUser(res.data.user);
      } catch (err) {
        console.error(err);
      }
    }
    getUser();
  }, [id]);

  useEffect(() => {
    async function getWatchlistDetails() {
      try {
        const watchlist = user.watchlist || [];
        const requests = watchlist.map((w) =>
          axios.get(
            w.titleType === "movie"
              ? `http://localhost:5001/api/movie/${w.titleId}`
              : `http://localhost:5001/api/tv/${w.titleId}`
          )
        );
        const responses = await Promise.all(requests);
        const responseData = responses.map((res, idx) => ({
          ...res.data,
          titleType: watchlist[idx].titleType,
        }));
        setWatchlistDetails(responseData);
      } catch (err) {
        console.error(err);
      }
    }
    getWatchlistDetails();
  }, [id, user.watchlist]);

  useEffect(() => {
    async function getUserReviews() {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/user/${id}/reviews`
        );
        setUserReviews(res.data.userReviews);
      } catch (err) {
        console.error(err);
      }
    }
    getUserReviews();
  }, [id]);

  async function handleRemoveFromWatchlist(id) {
    try {
      await axios.delete(`http://localhost:5001/api/user/watchlist/${id}`);
      setWatchlistDetails((prev) => prev.filter((item) => item.id !== id));
      setUser((prev) => ({
        ...prev,
        watchlist: prev.watchlist.filter((item) => item.titleId !== id),
      }));
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="user-profile-page">
      <UserProfileHeader user={user} />
      <div className="user-profile-content">
        {watchlistDetails && (
          <>
            <h2>My Watchlist</h2>
            <Watchlist
              watchlist={watchlistDetails}
              onRemoveFromWatchlist={handleRemoveFromWatchlist}
            />
          </>
        )}
        <h2>User Reviews</h2>
        <div className="reviews-list">
          {userReviews.map((review, idx) => (
            <div className="review-item" key={idx}>
              <div className="review-header">
                <img src={review.poster} width={45} height={65} />
                <div className="review-metadata">
                  <h2>{review.title}</h2>
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
                <h2>A review by {review.author}</h2>
                <p>{review.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
