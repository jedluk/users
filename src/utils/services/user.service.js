const axios = require("axios");
const API = "https://jsonplaceholder.typicode.com/users";

const login = (name, password) => {
  return new Promise((res, rej) => {
    if (name === "root" && password === "root") {
      res({ status: "correct" });
    } else {
      res({ status: "invalid" });
    }
    rej({ status: "error" });
  });
};

const getUser = (id, url = API) => {
  let combineURL = url;
  if (id) {
    combineURL = `${combineURL}/${id}`;
  }
  return new Promise((res, rej) => {
    axios
      .get(combineURL)
      .then(response => res(response.data))
      .catch(err => rej(err));
  });
};

const createUser = (data, url = API) => {
  return new Promise((res, rej) => {
    axios
      .post(url, JSON.stringify(data), {
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(response => res(response.data))
      .catch(err => rej(err));
  });
};

const updateUser = (data, url = API) => {
  const id = data.id;
  const combineURL = `${url}/${id}`;
  const userData = {...data};
  delete userData.id;
  return new Promise((res, rej) => {
    axios
      .put(combineURL, JSON.stringify(userData), {
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(response => res(response.data))
      .catch(err => rej(err));
  });
};

const deleteUser = (id, url = API) => {
  const combineURL = `${url}/${id}`;
  return new Promise((res, rej) => {
    axios
      .delete(combineURL)
      .then(response => res(response.data))
      .catch(err => rej(err));
  });
};

export const userService = {
  login,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
