import React from "react";
import PostContainer from "../../UtilModule/Post/PostContainer/PostContainer";
import "./Feed.css";
import InfiniteScroll from "react-infinite-scroller";
import { getFeed } from "../../../services/PostService.js";
import { useInfiniteScroll } from "../../../helpers/hooks/useInfiniteScroll.js";
import FriendSuggestion from "../../UtilModule/FriendSuggestion/FriendSuggestion";

const Feed = () => {
  const { data, pageNumber, hasMore, loadFunc } = useInfiniteScroll(
    [],
    0,
    4,
    getFeed
  );

  return (
    <div className="feed-container">
      <div className="feed">
        <div className="centerItems">
          <FriendSuggestion></FriendSuggestion>
        </div>
        <InfiniteScroll
          pageStart={pageNumber}
          loadMore={loadFunc}
          hasMore={hasMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {data?.map((post) => {
            return <PostContainer key={post.id} post={post} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Feed;
