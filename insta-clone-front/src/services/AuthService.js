import axios from "axios"

export const login = (credentials) => {
    return axios.post(process.env.REACT_APP_SERVER_URL + "/api/auth/login", credentials);
}

export const registration = (data) => {
    
    return axios.post(process.env.REACT_APP_SERVER_URL + "/api/Auth/registration", data);
}