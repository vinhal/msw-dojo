function parse(response) {
  return response.json().then((data) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(data);
    } else {
      return Promise.reject(data);
    }
  });
}

const request = (path, options) => fetch(path, options).then(parse);

export default request;
