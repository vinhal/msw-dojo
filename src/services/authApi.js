const BASE_URL = process.env.REACT_APP_API_URL;

const authApi = {
  login(email, password) {
    return fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  },
};

export default authApi;
