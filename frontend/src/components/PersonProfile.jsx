function PersonProfile({ person }) {
  return (
    <div className="person-profile">
      <img
        className="person-poster"
        src={person.profilePath}
        alt=""
        width={300}
        height={450}
      ></img>
      <h3>Personal Info</h3>
      <div className="person-info">
        <div>
          <strong>Known For</strong>
          <p>{person.knownForDepartment}</p>
        </div>
        <div>
          <strong>Gender</strong>
          <p>{person.gender}</p>
        </div>
        <div>
          <strong>Birthday</strong>
          <p>{person.birthday}</p>
        </div>
        {person.deathday && (
          <div>
            <strong>Day of Death</strong>
            <p>{person.deathday}</p>
          </div>
        )}
        <div>
          <strong>Place of Birth</strong>
          <p>{person.placeOfBirth}</p>
        </div>
        <div>
          <strong>Also Known As</strong>
          {person.alsoKnownAs?.map((aka) => (
            <p key={aka}>{aka}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonProfile;
