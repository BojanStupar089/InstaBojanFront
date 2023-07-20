import axios from "axios";
const BASE_URL = "https://localhost:7216/api/reaction";

export const togglePostReaction = (data) => {
  return axios.post(`${BASE_URL}/toggle-post-reaction`, data);
};

export const myPostReaction = (id) => {
  return axios.get(`${BASE_URL}/my-post-reaction/${id}`);
};


