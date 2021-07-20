const BASE_URL = process.env.REACT_APP_API_URL;

const todoApi = {
  list(loggedUser) {
    return fetch(`${BASE_URL}/todo/${loggedUser}`).then((response) => response.json());
  },
};

export default todoApi;
