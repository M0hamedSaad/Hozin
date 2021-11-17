import { SKIP_ON_BOARD } from "../types";

const INITIAL_STATE = { isSkip: false };

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SKIP_ON_BOARD:
      return { ...state, isSkip: true, };
    default:
      return state;
  }
};
