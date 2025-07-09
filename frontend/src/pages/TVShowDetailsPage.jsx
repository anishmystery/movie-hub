import axios from "axios";
import { useEffect } from "react";

function TVShowDetailsPage() {
  useEffect(() => {
    async function getTVShowDetails() {
      try {
        const res = await axios.get("http://localhost:5001/api/tv/t1");
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getTVShowDetails();
  }, []);
  return (
    <div>
      <h1>TV Show Details</h1>
    </div>
  );
}

export default TVShowDetailsPage;
