import { LOGIN, LOGOUT } from '../../actions/auth/actions';

export default(state = {}, action) => {
  switch (action.type){
    case LOGIN:
      return {
        name: action.name,
        uuid: action.uuid
      };
    case LOGOUT: 
      return {}
    default: 
      return state;
  }
}