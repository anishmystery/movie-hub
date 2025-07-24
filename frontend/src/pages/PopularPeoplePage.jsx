import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function PopularPeoplePage() {
  const [popularPeople, setPopularPeople] = useState([]);
  useEffect(() => {
    async function getPopularPeople() {
      try {
        const res = await axios.get("http://localhost:5001/api/person/popular");
        setPopularPeople(res.data.popular.people);
      } catch (err) {
        console.error(err);
      }
    }
    getPopularPeople();
  }, []);
  return (
    <div className="top-rated-page">
      <h1>Popular People</h1>
      <div className="top-rated-content-wrapper">
        <div className="top-rated-list">
          {popularPeople.map((person, idx) => (
            <div className="title-item" key={idx}>
              <div className="title-poster-wrapper">
                <img
                  src={person.profilePath}
                  className="title-poster"
                  alt=""
                ></img>
              </div>
              <div className="title-content">
                <p className="title-name">{person.name}</p>
                <p className="title-release-date">
                  {person.knownForDepartment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularPeoplePage;
