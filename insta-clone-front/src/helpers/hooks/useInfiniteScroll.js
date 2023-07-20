import { useState } from "react";

export const useInfiniteScroll = (
  initialData,
  initialPageNumber,
  pageSize,
  fetchFunction
) => {
  const [data, setData] = useState(initialData);
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const [hasMore, setHasMore] = useState(true);

  const loadFunc = () => {
    fetchFunction(pageNumber, pageSize).then((result) => {
    
      
      const newData = [...data, ...result.data];
    
      if (newData.length >= result.data.totalElements) {
        setHasMore(false);
      }
      setData(newData);
      setPageNumber(pageNumber + 1);
    });
  };

  return { data, pageNumber, hasMore, loadFunc };
};
