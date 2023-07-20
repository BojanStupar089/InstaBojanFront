import React, { useState, useEffect } from "react";
 /*import { getFriendSuggestions } from "../../../services/UserService";*/
import "./FriendSuggestion.css";
import Suggestion from "./Suggestion/Suggestion";

const FriendSuggestion = () => {
  const [Suggestions, setSuggestions] = useState([]);
  const [forComplexRule, setForComplexRule] = useState({});

  /*
  useEffect(() => {
    getFriendSuggestions()
      .then((res) => {
        if (res?.data) {
          setSuggestions(res.data.profiles);
          setForComplexRule(res.data.forComplexRule);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  */

  const showReport = () => {
    alert(
      "Report:\nMinimalna slicnost: " +
        forComplexRule.min +
        "\nMaksimalna slicnost: " +
        forComplexRule.max +
        "\nProsek: " +
        forComplexRule.average +
        "\nUkupno predloga: " +
        forComplexRule.count
    );
  };

  return Suggestions.length != 0 ? (
    <div className="suggestion-container">
      <div className="sugg-header d-flex">
        <h2>Suggestions For You</h2>
        <button
          type="button"
          class="btn btn-outline-dark my-btn"
          onClick={showReport}
        >
          ...
        </button>
      </div>
      <div className="suggestion-row">
        {Suggestions.map((s) => {
          return (
            <Suggestion
              name={s.name}
              picture={s.profilePicture}
              username={s.username}
            ></Suggestion>
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default FriendSuggestion;
