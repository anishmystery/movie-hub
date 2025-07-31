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
        <h2>My Watchlist</h2>
        <Watchlist
          watchlist={watchlistDetails}
          onRemoveFromWatchlist={handleRemoveFromWatchlist}
        />
      </div>
    </div>
  );
}

export default UserProfilePage;
