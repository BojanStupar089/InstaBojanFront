import React, { useState, useEffect } from "react";
import { getOnePost,deletePost } from "../../../../../services/PostService.js";
import PostHeader from "../../PostHeader/PostHeader.js";
import {IconButton,Menu,MenuItem} from '@mui/material';
import {MoreVert} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {getDecodedUsername} from "..//..//..//..//..//helpers/AuthHelper.js";


import "./SinglePostView.css";

const SinglePostView = ({ postId }) => {
  const [Post, setPost] = useState({});
  

  const[anchorEl,setAnchorEl]=useState(null);

  const navigate=useNavigate();
  const loggedInUser=getDecodedUsername();

  useEffect(() => {
    getOnePost(postId)
      .then((res) => {
        if (res.data) {
          setPost(res.data);
          
        }
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  }, []);

  const handleClick=(event)=>{

       setAnchorEl(event.currentTarget);
  };

  const handleClose=()=>{

    setAnchorEl(null);
  }

  const handleUpdatePost=(postId)=>{

    console.log("Update post funcionality");
    navigate(`/updatepost/${postId}`);
    handleClose();
  }

  const handleDeletePost=()=>{

    deletePost(postId).then(()=>{

      
      navigate("/home")
      handleClose();
    }).catch((err)=>{

       console.log(err);
    })
   

  };

  const isOwner=loggedInUser==Post.userName;

  return (
    <>
      <div id="single-post-view">
        <div id="main-img-container">
          <img
            id="single-post-img"
            alt="loading..."
            src={ Post.picture}
          ></img>
        </div>
        <div id="post-detalies-container">
          <div className="post-header-container">
            <PostHeader
              username={Post.userName}
              profilePic={
                 Post.userProfilePicture
              }
              location={Post.location}
            ></PostHeader>
            
            <IconButton
              className="more-options-button" onClick={handleClick}>
                
              <MoreVert />
            </IconButton>
            {isOwner &&(
            <Menu id="options-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              
             
               <MenuItem style={{color:'yellow'}} onClick={()=>handleUpdatePost(postId)}>Update Post</MenuItem>
               <MenuItem style={{ color:'red'}} onClick={()=>handleDeletePost()}>Delete Post</MenuItem>
            
              </Menu>
            )}
            <div className="post-description">
              <p>
                <span className="username">@{Post.userName}</span> {Post.text}
              </p>
            </div>
            
          </div>
         
          
        </div>
      </div>
    </>
  );
};

export default SinglePostView;
