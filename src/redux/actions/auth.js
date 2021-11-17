import { LOGIN, LOGOUT } from '../types'

export const login = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN, user: user
    });
  }
}

export const logoutuser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT, user: null
    });
  }
}