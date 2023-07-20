import { useParams } from 'react-router'
import SinglePostView from './SinglePostView/SinglePostView.js';
import "./SinglePost.css"



const SinglePost = () => {

    const { postId } = useParams()
    return (
        <div id='single-post-container'>
            <SinglePostView postId={postId}></SinglePostView>
        </div>

    )
}

export default SinglePost