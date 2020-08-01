import { v4 as uuid4 } from 'uuid';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (name) => {
  const uuid = uuid4();
  return {
    type: LOGIN,
    name,
    uuid,
  };
};

export const logout = () => ({
  type: LOGOUT,
});
