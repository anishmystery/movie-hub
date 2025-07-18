import PersonCreditsList from "./PersonCreditsList";
import PersonProfile from "./PersonProfile";

function PersonDetails({ person }) {
  return (
    <div className="person-details">
      <PersonProfile person={person} />
      <div className="person-details-content">
        <h1>Person Name</h1>
        <div className="person-overview">
          <h3>Biography</h3>
          <p>
            {person.biography}
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste non ratione quam sapiente enim sit ipsa saepe, laboriosam ut? Tenetur porro assumenda ratione nam! Placeat fugiat ullam recusandae tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste non ratione quam sapiente enim sit ipsa saepe, laboriosam ut? Tenetur porro assumenda ratione nam! Placeat fugiat ullam recusandae tenetur?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Id iste non ratione quam sapiente enim sit ipsa saepe, laboriosam ut? Tenetur porro assumenda ratione nam! Placeat fugiat ullam recusandae tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste non ratione quam sapiente enim sit ipsa saepe, laboriosam ut? Tenetur porro assumenda ratione nam! Placeat fugiat ullam recusandae tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste non ratione quam sapiente enim sit ipsa saepe, laboriosam ut? Tenetur porro assumenda ratione nam! Placeat fugiat ullam recusandae tenetur?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Id iste non ratione quam sapiente enim sit ipsa saepe, laboriosam ut? Tenetur porro assumenda ratione nam! Placeat fugiat ullam recusandae tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste non ratione quam sapiente enim sit ipsa saepe, laboriosam ut? Tenetur porro assumenda ratione nam! Placeat fugiat ullam recusandae tenetur?"
            }
          </p>
        </div>
        <div className="person-credits-container">
          <PersonCreditsList
            credits={person.credits?.cast}
            creditsType="cast"
          />
          <PersonCreditsList
            credits={person.credits?.crew}
            creditsType="crew"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonDetails;
