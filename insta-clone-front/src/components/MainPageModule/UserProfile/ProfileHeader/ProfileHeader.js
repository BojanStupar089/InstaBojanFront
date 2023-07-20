import React from "react";
import UserBio from "../Bio/UserBio";
import useProfileHeader from "../../../../helpers/hooks/useProfileHeader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProfileHeader.css";
import { UpdateProfileForm } from "./UpdateProfile/UpdateProfileForm/UpdateProfileForm";
import {updateProfile} from "..//..//../../services/UserService";
import { UpdateProfileButton } from "./UpdateProfile/UpdateProfileButton";
import {useNavigate}from "react-router-dom";

toast.configure();

const ProfileHeader = ({ userName }) => {

  
  
  const [
    loggedInUser,
    ProfileName,
    Bio,
    ProfilePicture,
    PostsNumber,
    FollowerNumber,
    FollowingNumber,
    FollowEnabled,
    FollowVal,
    setFollowVal,
    setFollowerNumber,
    
    
  ] = useProfileHeader(userName);

  
  


  return (
    <div className="header-container row">
      <div className="img-container">
        <img
          className="profile-img"
          alt="loading..."
          src={ProfilePicture}
        ></img>
      </div>
     
        <UserBio  userName={userName}
                  FollowEnabled = {FollowEnabled} 
                  FollowVal = {FollowVal}
                  PostsNumber={ PostsNumber}
                  FollowerNumber={ FollowerNumber}
                  FollowingNumber={ FollowingNumber}
                  ProfileName={ ProfileName}
                  Bio={Bio}
                  loggedInUser={loggedInUser}
                  setFollowVal={setFollowVal} 
                  setFollowerNumber={setFollowerNumber}
         ></UserBio>

         <UpdateProfileButton loggedInUser={loggedInUser} userName={userName} />
          
</div>
  )
};

export default ProfileHeader;
