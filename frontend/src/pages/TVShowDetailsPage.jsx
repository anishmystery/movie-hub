import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TVShowDetailsHeader from "../components/TVShowDetailsHeader";
import TVShowCredits from "../components/TVShowCredits";
import TVShowReviews from "../components/TVShowReviews";

function TVShowDetailsPage() {
  const { id } = useParams();
  const [tvShow, setTVShow] = useState({});
  const year = tvShow.firstAirDate ? tvShow.firstAirDate.split("/")[2] : "";
  useEffect(() => {
    async function getTVShowDetails() {
      try {
        const res = await axios.get(`http://localhost:5001/api/tv/${id}`);
        setTVShow(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getTVShowDetails();
  }, [id]);
  return (
    <div className="tv-show-details-page">
      {tvShow && Object.keys(tvShow).length !== 0 && (
        <>
          <TVShowDetailsHeader tvShow={tvShow} year={year} />
          {tvShow.cast && <TVShowCredits tvShow={tvShow} />}
          {tvShow.reviews && <TVShowReviews tvShow={tvShow} id={id} />}
        </>
      )}
    </div>
  );
}

export default TVShowDetailsPage;
