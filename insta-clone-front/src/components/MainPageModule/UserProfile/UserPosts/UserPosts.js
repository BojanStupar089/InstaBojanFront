import React, { useState, useEffect } from 'react'
import "./UserPosts.css"
import { getUserPosts } from '../../../../services/PostService.js';
import { REACT_APP_URL } from '../../../../helpers/constants'


const UserPosts = ({ userName }) => {

  const [Posts, setPosts] = useState([])
  useEffect(() => {
    getUserPosts( userName,1,9)
      .then(res => {
       
        if (res.data) { 
          const pictures = res.data.map(post => {
            const img = post.picture ? `${post.picture}` : 'https://localhost:7216/static/posts/default.jpg'
         
          
            return { key:post.id, picture: img, id: post.id }
          })
          setPosts(pictures)
        }
        return null;
      })
      .catch(err => {
        console.log(JSON.stringify(err))
      })
  }, [])

  const viewPost = (id) => {
    window.location.href = `${REACT_APP_URL}/post/${id}`
  }

  return (
    <div className='user-posts-container'>
      {Posts.map(post =>
        <div className='my-img-container' key={post.key}>
          <img className='my-img' alt='img' src={post.picture} onClick={() => viewPost(post.id)}></img>
        </div>
      )}
    </div>
  )
}

export default UserPosts

const img = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"