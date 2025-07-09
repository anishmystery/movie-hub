import axios from "axios";
import { useEffect } from "react";

function PeoplePage() {
  useEffect(() => {
    async function getPeople() {
      try {
        const res = await axios.get("http://localhost:5001/api/person/p1");
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getPeople();
  }, []);
  return (
    <div>
      <h1>People</h1>
    </div>
  );
}

export default PeoplePage;
