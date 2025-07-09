import axios from "axios";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    async function homePage() {
      try {
        const res = await axios.get("http://localhost:5001/api");
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    homePage();
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default HomePage;
