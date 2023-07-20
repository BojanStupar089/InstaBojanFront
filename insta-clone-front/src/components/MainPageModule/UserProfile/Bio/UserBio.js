import React from 'react'
import { followUnfollow } from "../../../../services/UserService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../ProfileHeader/ProfileHeader.css";
import { useEffect } from 'react';

const UserBio = ({...params}) => {

  const  {
    userName,
    FollowEnabled,
    FollowVal,
    PostsNumber,
    FollowerNumber, 
    FollowingNumber, 
    ProfileName, 
    loggedInUser,                   
    setFollowVal,
    setFollowerNumber,
  } = params

  
  const handleFollow = (click) => {
    followUnfollow(loggedInUser, userName)
      .then((res) => {
        if(FollowVal === "Follow")
        {
          setFollowVal("Unfollow")
          setFollowerNumber(FollowerNumber + 1)
        }
        else{
          setFollowVal("Follow");
          setFollowerNumber(FollowerNumber - 1)
        }
        toast.success(`User successfully ${FollowVal}ed!`);
      })
      .catch((err) => {console.log(err.message)});
  };

  


  return (
      <div className="info-container">
            <div className="row space-between">
              <p className="usernameHeader">{userName}</p>
              {FollowEnabled ?
               <button  className="btn btn-outline-primary small" onClick={(e) => handleFollow(e)}>
                  {FollowVal}
                </button>
               :<></>
              }
            </div>
            <div className="row">
              <span className="info-val">
                <span className="number">{PostsNumber}</span>posts</span>
              <span className="info-val">
                <span className="number">{FollowerNumber}</span>followers</span>
              <span className="info-val">
                <span className="number">{FollowingNumber}</span>following</span>
            </div>
            <p className="name">{ProfileName}</p>
           
          </div>  
      )
}

export default UserBio