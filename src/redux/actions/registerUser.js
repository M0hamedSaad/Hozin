import { CLEAR_USERS, REGISTER } from '../types'

export const registerNewUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER,
      user: user
    });
  }
}
export const resetUsers = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_USERS });
  }
}