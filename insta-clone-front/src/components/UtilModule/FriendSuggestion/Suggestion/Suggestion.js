import React from "react";
import { SPRING_APP_URL, REACT_APP_URL } from "../../../../helpers/constants";
import "./Suggestion.css";

const Suggestion = ({ picture, username, name }) => {
  const onclick = () => {
    window.location.href = `${REACT_APP_URL}/profile/${username}`;
  };

  return (
    <div className="suggestion">
      <div className="suggestion-header">
        <div className="img-container" onClick={() => onclick()}>
          <img
            className="profile-img maloDesno"
            alt="loading..."
            src={SPRING_APP_URL + picture}
          ></img>
        </div>
      </div>
      <div className="suggestion-username" onClick={() => onclick()}>
        <h4>{username}</h4>
      </div>
      <div className="suggestion-name">
        <h6>{name}</h6>
      </div>
      <div className="suggestion-follow">
        <button className="btn btn-primary" onClick={() => onclick()}>
          Pregledaj
        </button>
      </div>
    </div>
  );
};

export default Suggestion;
