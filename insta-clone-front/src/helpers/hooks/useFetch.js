import axios from "axios"; 
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const fetchUrl = process.env.REACT_APP_SERVER_URL +url;
  const [data, setData] = useState(null);


  useEffect(() => {
    axios.get(fetchUrl)
      .then((res) => setData(res.data))
      .catch((err) => console.error("FETCH_ERROR:" + err.message));
  }, []);

  return data;
};

export default useFetch;