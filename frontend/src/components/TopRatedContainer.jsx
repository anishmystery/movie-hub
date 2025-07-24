import TopRatedHeader from "./TopRatedHeader";
import TopRatedTitlesList from "./TopRatedTitlesList";

function TopRatedContainer({
  topRatedTitles,
  topRatedTitlesSelectedType,
  onTopRatedTitlesSelectedTypeToggle,
}) {
  return (
    <div className="top-rated-container">
      <TopRatedHeader
        topRatedTitlesSelectedType={topRatedTitlesSelectedType}
        onTopRatedTitlesSelectedTypeToggle={onTopRatedTitlesSelectedTypeToggle}
      />
      {Object.keys(topRatedTitles).length !== 0 && (
        <TopRatedTitlesList
          topRatedTitles={topRatedTitles}
          topRatedTitlesSelectedType={topRatedTitlesSelectedType}
        />
      )}
    </div>
  );
}

export default TopRatedContainer;
