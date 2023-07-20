import React,{useState} from "react";
import {Link} from "react-router-dom";

import {UpdateProfileForm} from "./UpdateProfileForm/UpdateProfileForm"; 
export const UpdateProfileButton = ({ loggedInUser, userName }) => {


  if (loggedInUser === userName) {
    return <Link to={`/update/${userName}`}  className="btn btn-primary btn-block w-25">Update Profile</Link>
    
    
  }
 return null;
}

