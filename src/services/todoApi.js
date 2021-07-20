import request from "./api";

const BASE_URL = process.env.REACT_APP_API_URL;

const todoApi = {
  list(loggedUser) {
    return request(`${BASE_URL}/todo/${loggedUser}`);
  },
};

export default todoApi;
