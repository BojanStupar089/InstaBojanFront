import React, { useState } from "react";
import PostHeader from "../PostHeader/PostHeader";
import "./PostContainer.css";
import { REACT_APP_URL } from "../../../../helpers/constants.js";
import { PostContext } from "../../../../helpers/contexts/PostContext";


const PostContainer = ({ post }) => {
 

  const viewPost = (id) => {
    window.location.href = `${REACT_APP_URL}/post/${id}`;
  };

  return (
    <div className="post-container">
      <PostHeader
        username={post.userName}
        profilePic={post.userProfilePicture}
        
      ></PostHeader>
      <img
        className="post-img cursor"
        alt="loading..."
        src={post.picture}
        onClick={() => viewPost(post.id)}
      ></img>

      <PostContext.Provider value={{entityId:post.id}}></PostContext.Provider>
     
      <div className="post-description">
        <p>
          <span className="username">{post.userName}</span> {post.text}
        </p>
      </div>
    
    </div>
  );
};

export default PostContainer;
