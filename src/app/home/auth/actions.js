const uuid4 = require("uuid/v4");

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (name, pass) => {
  if(name === 'root' && pass === 'root'){
    const uuid = uuid4();
    return {
      type: LOGIN,
      name,
      uuid
    };
  }
  return {};
};

export const logout = () => ({
  type: LOGOUT
});
