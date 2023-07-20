import React from 'react'
import { useParams } from 'react-router'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import UserPosts from './UserPosts/UserPosts'
import "./UserProfile.css"
import { useState,useEffect } from 'react'
import { checkIfUserFollowsUser } from '../../../services/UserService'
import { getDecodedUsername } from '../../../helpers/AuthHelper'

const UserProfile = () => {

  const { userName } = useParams();
  
  const loggedInUser=getDecodedUsername();

  const[followsUser,setFollowsUser]=useState(false);

 
  useEffect(()=>{

  checkIfUserFollowsUser(loggedInUser,userName).then((res)=>{

       setFollowsUser(res.data);
  })
  },[])
  
  return (
    <div className='profile-container'>
      <div className='profile'>
        <ProfileHeader userName={userName} />
        {loggedInUser===userName || followsUser ?( <UserPosts userName={userName} />):null}
        <div className="centerItems">
         
        </div>

      </div>
    </div>
  )
}

export default UserProfile