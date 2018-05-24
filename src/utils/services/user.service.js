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
    fetch(combineURL)
      .then(res => res.json())
      .then(data => res(data))
      .catch(err => rej(err));
  });
};

const postUser = (id, data, url = `${API}/post`) => {
  let combineURL = url;
  return new Promise((res, rej) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => res(data))
      .catch(err => rej(err));
  });
};

const putUser = (id, data, url = `${API}/put`) => {
  return new Promise((res, rej) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => res(data))
      .catch(err => rej(err));
  });
};

const deleteUser = (id, url = `${API}/delete`) => {
  const combineURL = `${url}/${id}`;
  return new Promise((res, rej) => {
    fetch(combineURL, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(() => res("User has been deleted"))
      .catch(err => rej(err));
  });
};

export const userService = {
  login,
  getUser,
  postUser,
  putUser,
  deleteUser
};
