import React from 'react'
import Share from "@mui/icons-material/Share";
import { toast } from 'react-toastify';
import {REACT_APP_URL} from '../../../../../helpers/constants'
import {sharePost} from '../../../../../services/PostService'
import 'react-toastify/dist/ReactToastify.css';
import "./ShareButton.css"

const ShareButton = ({ postid }) => {


  const onShare = () => {
    var input = document.createElement('input');
    input.setAttribute('value', `${REACT_APP_URL}/post/${postid}`);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    toast.success("Link copied to Clipboard!")
    sharePost(postid).then(res=>{
      
    })
  }
  return (
    <span className='share' onClick={()=>onShare()}><Share></Share></span>
  )
}

export default ShareButton