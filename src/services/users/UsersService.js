const fetch = require("node-fetch");

class Service {
  constructor(url = "https://jsonplaceholder.typicode.com/users") {
    this.url = url;
  }

  get(url = this.url, id) {
    return new Promise((res, rej) => {
      fetch(url)
        .then(res => res.json())
        .then(data => res(data))
        .catch(err => rej(err));
    });
  }

  post(url = `${this.url}/post`, id, data) {
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
  }

  put(url = `${this.url}/put`, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => res(data))
        .catch(err => rej(err));
    });
  }

  delete(url = `${this.url}/delete`, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(() => res("User has been deleted"))
        .catch(err => rej(err));
    });
  }
}

module.exports = { Service };
