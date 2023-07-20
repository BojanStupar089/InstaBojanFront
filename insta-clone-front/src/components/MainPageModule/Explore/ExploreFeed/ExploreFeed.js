import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { getExplore } from "../../../../services/PostService.js";
import { useInfiniteScroll } from "../../../../helpers/hooks/useInfiniteScroll.js";
import "./ExploreFeed.css";
import RegularExploreBlock from "../ExploreBlock/RegularExploreBlock/RegularExploreBlock.js";
import CustomExploreBlock from "../ExploreBlock/CustomExploreBlock/CustomExploreBlock.js";
import { reload } from "../../../../services/PostService";

const ExploreFeed = () => {
  const { data, pageNumber, hasMore, loadFunc } = useInfiniteScroll(
    [],
    0,
    4,
    getExplore
  );

  const preReload = () => {
    reload().then(() => {
      window.location.reload();
    });
  };

  return (
    <div id="exploreFeed">
      <button
        type="button"
        class="btn btn-outline-primary w-100"
        onClick={preReload}
      >
        Reload
      </button>
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
        {data
          ?.reduce((acc, x, i) => {
            const idx = Math.floor(i / 3);
            acc[idx] = [...(acc[idx] || []), x];
            return acc;
          }, [])
          .map((postGroup, index) => {
            return index % 3 ? (
              <RegularExploreBlock posts={postGroup}></RegularExploreBlock>
            ) : (
              <CustomExploreBlock posts={postGroup}></CustomExploreBlock>
            );
          })}
      </InfiniteScroll>
    </div>
  );
};

export default ExploreFeed;
