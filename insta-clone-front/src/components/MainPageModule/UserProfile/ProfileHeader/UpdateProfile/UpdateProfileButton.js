import React,{useState} from "react";
import {Link} from "react-router-dom";


import {UpdateProfileForm} from "./UpdateProfileForm/UpdateProfileForm"; 
export const UpdateProfileButton = ({ loggedInUser, userName }) => {


  if (loggedInUser === userName) {
    return(<div className="col-xs-6 col-sm-4 col-md-3"><Link to={`/updateProfile/${userName}`}  className="btn btn-primary btn-block md ">Update Profile</Link></div>)
    
    
  }
 return null;
}

