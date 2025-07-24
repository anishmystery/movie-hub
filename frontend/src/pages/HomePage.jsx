import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import HomePageHeader from "../components/HomePageHeader";
import TopRatedContainer from "../components/TopRatedContainer";
import PopularTitlesContainer from "../components/PopularTitlesContainer";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [topRatedTitles, setTopRatedTitles] = useState({});
  const [popularTitles, setPopularTitles] = useState({});
  const [topRatedTitlesSelectedType, setTopRatedTitlesSelectedType] =
    useState("movie");
  const [popularTitlesSelectedType, setPopularTitlesSelectedType] =
    useState("movie");
  useEffect(() => {
    async function getTopRatedTitles() {
      try {
        const res = await axios.get("http://localhost:5001/api/top-rated");
        setTopRatedTitles(res.data.topRated);
      } catch (err) {
        console.error(err);
      }
    }
    getTopRatedTitles();
  }, []);

  useEffect(() => {
    async function getPopularTitles() {
      try {
        const res = await axios.get("http://localhost:5001/api/popular");
        setPopularTitles(res.data.popular);
      } catch (err) {
        console.error(err);
      }
    }
    getPopularTitles();
  }, []);

  function handleTopRatedTitlesSelectedTypeToggle(type) {
    setTopRatedTitlesSelectedType(type);
  }

  function handlePopularTitlesSelectedTypeToggle(type) {
    setPopularTitlesSelectedType(type);
  }

  return (
    <div className="home-page">
      <HomePageHeader />
      <div className="home-page-content">
        <TopRatedContainer
          topRatedTitles={topRatedTitles}
          topRatedTitlesSelectedType={topRatedTitlesSelectedType}
          onTopRatedTitlesSelectedTypeToggle={
            handleTopRatedTitlesSelectedTypeToggle
          }
        />
        <PopularTitlesContainer
          popularTitles={popularTitles}
          popularTitlesSelectedType={popularTitlesSelectedType}
          onPopularTitlesSelectedTypeToggle={
            handlePopularTitlesSelectedTypeToggle
          }
        />
      </div>
    </div>
  );
}

export default HomePage;
