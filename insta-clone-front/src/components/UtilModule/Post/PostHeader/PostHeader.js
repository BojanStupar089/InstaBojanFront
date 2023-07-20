import React from 'react'
import { Avatar } from '@material-ui/core'
import "./PostHeader.css"

const PostHeader = ({ username, profilePic}) => {

  const seeProfile = () => window.location.href = `/profiles/${username}`

  return (
    <>
      <div className='post-header' onClick={seeProfile}>
        <Avatar
          className="avatar"
          alt={username}
          src={profilePic}
        ></Avatar>
        <div className='col'>
          <h3 className='post-header-username'>{username}&nbsp;<span>•</span></h3>
          <div className='location-tag-container'>
            {/*<span className='location-tag'>{location}</span>*/}
          </div>
        </div>
      </div>



    </>
  )
}

export default PostHeader