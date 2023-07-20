import React from "react";
import { Reactions } from "./Reactions/Reactions";
import ShareButton from './ShareButton/ShareButton.js'
import "./ReactionsBar.css";

const ReactionsBar = ({ likes, postId }) => {
  return (
    <div className="reactions-container">
      <Reactions
        reactionKind={"POST_REACTION"}
      />
      <div className="likes">
        <div className="likes-col">
          <ShareButton postid={postId}></ShareButton>
        </div>
        <div className="likes-col">
          <p className="likes-text">Liked By {likes} people</p>
        </div>


      </div>
    </div>
  );
};

export default ReactionsBar;
