import produce from "immer";
import _ from "lodash";
import { showToast } from "../../utils";
import { login } from "../actions";
import { REGISTER, CLEAR_USERS } from "../types";

const INITIAL_STATE = { users: [] };

export default produce((draft, action = {}) => {
  switch (action.type) {
    case REGISTER:
      {
        const newState = draft;
        newState.users.push(action.user)
      }
      break;

    case CLEAR_USERS:
      return INITIAL_STATE;

    default:
      break;
  }
}, INITIAL_STATE);
