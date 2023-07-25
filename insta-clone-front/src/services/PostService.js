import axios from "axios";

const postUrl = process.env.REACT_APP_SERVER_URL + "/api/posts/";

export const getFeed = (pageNumber,pageSize) => {
  return axios.get(postUrl+`feed?page=${pageNumber}&size=${pageSize}`);
};

export const getMyPosts = (pageNumber, pageSize) => {
  return axios.get(postUrl + `my-posts?page=${pageNumber}&size=${pageSize}`);
};

export const getOnePost = (postId) => {
  return axios.get(postUrl + postId);
};

export const publishPost = (postToPublish) => {
  return axios.post(postUrl, postToPublish);
};

export const deletePost = (postId) => {
  return axios.delete(postUrl + postId);
};

export const updatePost = (postId,updatedPost) => {
  return axios.put(postUrl+`${postId}`, updatedPost);
};

export const getUserPosts = (username,page, size) => {
  return axios.get(
     `${postUrl}user-posts?username=${username}&page=${page}&size=${size}`
  );
};

