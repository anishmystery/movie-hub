import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonDetails from "../components/PersonDetails";

function PeoplePage() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  useEffect(() => {
    async function getPerson() {
      try {
        const res = await axios.get(`http://localhost:5001/api/person/${id}`);
        setPerson(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getPerson();
  }, [id]);
  return (
    <div className="people-details-page">
      {person && Object.keys(person).length !== 0 && (
        <PersonDetails person={person} />
      )}
    </div>
  );
}

export default PeoplePage;
