import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FullCreditsHeader from "../components/FullCreditsHeader";
import FullCastList from "../components/FullCastList";
import FullCrewList from "../components/FullCrewList";

function FullCreditsPage({ titleType }) {
  const { id } = useParams();
  const [title, setTitle] = useState({});
  const navigate = useNavigate();
  const groupedCrewByDepartment = title.crew?.reduce((acc, member) => {
    if (!acc[member.department]) acc[member.department] = [];
    acc[member.department].push(member);
    return acc;
  }, []);
  useEffect(() => {
    async function getTitleDetails() {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/${titleType}/${id}`
        );
        setTitle(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getTitleDetails();
  }, [id, titleType]);

  function handleBack() {
    navigate(`/${titleType}/${id}`);
  }

  return (
    <div className="full-credits-page">
      <FullCreditsHeader title={title} onBack={handleBack} />
      <div className="full-credits-container">
        <div className="full-cast-wrapper">
          <h2>Cast</h2>
          <FullCastList cast={title.cast} titleType={titleType} />
        </div>
        <div className="full-crew-wrapper">
          <h2>Crew</h2>
          <FullCrewList crew={groupedCrewByDepartment} titleType={titleType} />
        </div>
      </div>
    </div>
  );
}

export default FullCreditsPage;
