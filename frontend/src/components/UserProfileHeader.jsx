function UserProfileHeader({ user }) {
  return (
    <div className="user-profile-header">
      <div className="user-profile-header-poster-wrapper">
        <img
          src="https://placehold.co/120x120"
          className="user-profile-header-poster"
        />
      </div>
      <div className="user-profile-header-content">
        <h1>{user.name}</h1>
        <div className="user-profile-header-rating">
          <h1>80%</h1>
          <p>Average Rating</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileHeader;
