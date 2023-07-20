import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL + "/api/users";

const urlProfiles=process.env.REACT_APP_SERVER_URL + "/api/profiles";

export const resetPassword = (email) => {
  return axios.post(`${url}/reset-password?email=${email}`);
};

export const changePasswordWithToken = (token, data) => {
  return axios.post(`${url}/change-password-token?token=${token}`, data);
};

export const searchUsers = (query) => {
  return axios.get(`${urlProfiles}/search?query=${query}`);
};

export const getProfileInfo = (username) => {
  return axios.get(`${urlProfiles}/username?username=${username}`);
};

export const checkIfUserFollowsUser = (username, followedUser) => {
  return axios.get(
    `${urlProfiles}/follow-check?username=${username}&followedUsername=${followedUser}`
  );
};

export const followUnfollow = (myUsername, otherUsername) => {
  const dto = {
    myUsername: myUsername,
    otherUsername: otherUsername,
  };
  return axios.post(`${urlProfiles}/follow-unfollow`, dto);
};

 export const updateProfile=(userName,updatedProfile)=>{

       return axios.put(`${urlProfiles}/${userName}`,updatedProfile);
 }

/*
export const getFriendSuggestions = () => {
  return axios.get(`$/api/profiles/suggestions`); 
};
*/