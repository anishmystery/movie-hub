import { Link, useNavigate } from "react-router-dom";

function ViewMoreCredits({ id, titleType }) {
  const navigate = useNavigate();
  function handleViewMore() {
    navigate(`/${titleType}/${id}/full-credits`);
  }
  return (
    <div className="view-more-credits-item">
      <Link
        className="no-text-decoration"
        to={`/${titleType}/${id}/full-credits`}
      >
        <p className="view-more-credits-content" onClick={handleViewMore}>
          {"View More ->"}
        </p>
      </Link>
    </div>
  );
}

export default ViewMoreCredits;
