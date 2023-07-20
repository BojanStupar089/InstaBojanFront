import axios from "axios";

axios.interceptors.request.use(
  (req) => {
    if (req.url.startsWith("https://api.geoapify.com")) return req;

    const token = sessionStorage.getItem("token");

    if (token) {
      req.headers.common.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
