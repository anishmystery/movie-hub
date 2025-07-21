import FullCrewItem from "./FullCrewItem";

function FullCrewList({ crew, titleType }) {
  return (
    <div className="crew-list">
      {console.log(crew)}
      {crew &&
        Object.entries(crew)?.map(([department, members]) => (
          <div className="crew-group">
            <h3>{department}</h3>
            <div className="crew-members-list">
              {members?.map((c) => (
                <FullCrewItem key={c.id} crew={c} titleType={titleType} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default FullCrewList;
