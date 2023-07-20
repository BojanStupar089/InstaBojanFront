import React from 'react'
import "./RegularExploreBlock.css"
import { REACT_APP_URL } from '../../../../../helpers/constants'

const RegularExploreBlock = ({ posts }) => {


    const viewPost = (id) => {
        window.location.href = `${REACT_APP_URL}/post/${id}`
    }

    return (
        posts && posts[0] ?

            <div className='regular-explore-block'>
                {posts?.map(post =>
                    <div className='explore-post-container'>
                        <img className="explore-post"
                            alt="loading..."
                            src={process.env.REACT_APP_SERVER_URL + post.picture}
                            onClick={() => viewPost(post.id)}
                        ></img>
                    </div>
                )}
            </div>

            : <></>
    )
}

export default RegularExploreBlock