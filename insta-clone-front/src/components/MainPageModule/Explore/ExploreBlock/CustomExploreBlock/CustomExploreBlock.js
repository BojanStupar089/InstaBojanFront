import React from 'react'
import "./CustomExploreBlock.css"
import { REACT_APP_URL } from '../../../../../helpers/constants'


const CustomExploreBlock = ({ posts }) => {

  const viewPost = (id) => {
    window.location.href = `${REACT_APP_URL}/post/${id}`
  }
  return (

    posts && posts[0] ?

      <div className='custom-explore-block'>
        <div className='custom-explore-small-col'>
          <div className='custom-post-container-sm'>
            <img className="custom-post"
              alt="loading..."
              src={process.env.REACT_APP_SERVER_URL + posts[0].picture}
              onClick={() => viewPost(posts[0].id)}
            ></img>
          </div>

          {!!posts[2] ?
            <div className='custom-post-container-sm'>
              <img className="custom-post"
                alt="loading..."
                src={process.env.REACT_APP_SERVER_URL + posts[2].picture}
                onClick={() => viewPost(posts[2].id)}
              ></img>
            </div> 
            : <></>}
        </div>
          {!!posts[1] ?
            <div className='custom-explore-big-col'>
              <div className='custom-post-container-lg'>
                <img className="custom-post"
                  alt="loading..."
                  src={process.env.REACT_APP_SERVER_URL + posts[1].picture}
                  onClick={() => viewPost(posts[1].id)}
                ></img>
              </div>
            </div>
            : <></>}

      </div>
      : <></>
  )
}

export default CustomExploreBlock


