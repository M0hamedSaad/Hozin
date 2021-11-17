import { LOGIN, LOGOUT } from "../types";

const INITIAL_STATE = { user: null, };
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOGIN:
      return { user: action.user };
    case LOGOUT:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};