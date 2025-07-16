import PersonCreditItem from "./PersonCreditItem";

function PersonCreditsList({ credits, creditsType }) {
  return (
    <div className="person-credits-list">
      <h3>{creditsType === "cast" ? "Acting" : "Crew"}</h3>
      {credits?.map((credit) => (
        <PersonCreditItem key={credit.id} credit={credit} />
      ))}
    </div>
  );
}

export default PersonCreditsList;
