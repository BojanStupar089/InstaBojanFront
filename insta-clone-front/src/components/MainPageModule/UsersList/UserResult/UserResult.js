import "./UserResult.css";

export const UserResult = ({ user }) => {
  const seeProfile = () => {
    window.location.href = `http://localhost:3000/profiles/${user.userName}`;
  };
  return (
    <div
      className="user-result"
      onClick={seeProfile}
    >
      <img
        alt="slika"
        className="slicica"
        src={user.profilePicture}
        height="50px"
      />
      <span className="username">{user.userName}</span>
      <span className="user-name">{user.name}</span>
    </div>
  );
};
