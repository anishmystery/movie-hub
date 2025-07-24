import PopularTitlesHeader from "./PopularTitlesHeader";
import PopularTitlesList from "./PopularTitlesList";

function PopularTitlesContainer({
  popularTitles,
  popularTitlesSelectedType,
  onPopularTitlesSelectedTypeToggle,
}) {
  return (
    <div className="popular-container">
      <PopularTitlesHeader
        popularTitlesSelectedType={popularTitlesSelectedType}
        onPopularTitlesSelectedTypeToggle={onPopularTitlesSelectedTypeToggle}
      />
      {Object.keys(popularTitles).length !== 0 && (
        <PopularTitlesList
          popularTitles={popularTitles}
          popularTitlesSelectedType={popularTitlesSelectedType}
        />
      )}
    </div>
  );
}

export default PopularTitlesContainer;
