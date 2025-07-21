import FullCastItem from "./FullCastItem";

function FullCastList({ cast, titleType }) {
  return (
    <div className="cast-list">
      {cast?.map((c) => (
        <FullCastItem key={c.id} cast={c} titleType={titleType} />
      ))}
    </div>
  );
}

export default FullCastList;
