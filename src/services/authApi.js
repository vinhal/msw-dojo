import request from "./api";

const BASE_URL = process.env.REACT_APP_API_URL;

const authApi = {
  login(email, password) {
    return request(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default authApi;
