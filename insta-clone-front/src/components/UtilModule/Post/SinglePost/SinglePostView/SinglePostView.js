import React, { useState, useEffect } from "react";
import { getOnePost,deletePost } from "../../../../../services/PostService.js";
import PostHeader from "../../PostHeader/PostHeader.js";
import { PostContext } from "../../../../../helpers/contexts/PostContext.js";
import ReactionsBar from "../../Reactions/ReactionsBar.js";
import AddComment from "../../AddComment/AddComment.js";
import TagRibbon from '../../TagRibbon/TagRibbon'
import {IconButton,Menu,MenuItem} from '@mui/material';
import {MoreVert} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {getDecodedUsername} from "..//..//..//..//..//helpers/AuthHelper.js";


import "./SinglePostView.css";

const SinglePostView = ({ postId }) => {
  const [Post, setPost] = useState({});
  const [likes, setLikes] = useState(0);

  const[anchorEl,setAnchorEl]=useState(null);

  const navigate=useNavigate();
  const loggedInUser=getDecodedUsername();

  useEffect(() => {
    getOnePost(postId)
      .then((res) => {
        if (res.data) {
          setPost(res.data);
          setLikes(res.data.numOfReactions);
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

      //alert("Post deleted successfully!");
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
            <TagRibbon tags={Post.categories} datetime={Post.time}></TagRibbon>
          </div>
          <div className="single-post-comment-container">
            <div></div>
            <div className="reactions-comment-container">
              <PostContext.Provider
                value={{ entityId: postId, likes, setLikes }}
              >
                <ReactionsBar likes={likes} postId={Post.id} />
              </PostContext.Provider>
              <AddComment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostView;
