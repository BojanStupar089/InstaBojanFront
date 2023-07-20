
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  getProfileInfo,
  checkIfUserFollowsUser,
} from "../../services/UserService";
import { getDecodedUsername } from "../../helpers/AuthHelper.js";
import { SPRING_APP_URL } from "../../helpers/constants";

export const useProfileHeader = (userName) => {
  const [ProfileName, setProfileName] = useState("");
  
  const [ProfilePicture, setProfilePicture] = useState("");
  const [PostsNumber, setPostsNumber] = useState(0);
  const [FollowerNumber, setFollowerNumber] = useState(0);
  const [FollowingNumber, setFollowingNumber] = useState(0);
  const [FollowVal, setFollowVal] = useState("Follow");
  
 
  var loggedInUser = null;
  const FollowEnabled = getDecodedUsername() !== userName;

  useEffect(() => {
    if (!userName) return <Navigate to={"/login"} />;
    loggedInUser = getDecodedUsername();
    
    getProfileInfo(userName)
      .then((res) => {
      
        if (!res.data.userName) <Navigate to={"/home"} />;
        setProfileName(res.data.profileName);
        setPostsNumber(res.data.postsNumber);
        setFollowerNumber(res.data.followersNumber);
        setFollowingNumber(res.data.followingNumber);
        setProfilePicture(res.data.profilePicture);
      
        
        checkIfUserFollowsUser(loggedInUser, userName).then((res) =>
              res.data ? setFollowVal("Unfollow") : setFollowVal("Follow")
            );
      })
      .catch((err) => {
        window.location.href = "/home";
      });
  }, []);

  return [
    getDecodedUsername(),
   //loggedInUser,
    ProfileName,
   
    ProfilePicture,
    PostsNumber,
    FollowerNumber,
    FollowingNumber,
    FollowEnabled,
    FollowVal,
    setFollowVal,
    setFollowerNumber,
  ];
};

export default useProfileHeader;