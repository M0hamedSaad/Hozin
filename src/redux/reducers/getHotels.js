
import { GET_HOTEL_ATTEMPT, GET_HOTEL_SUCCESS } from "../types";

const INITIAL_STATE = { hotels: [], loading: true, nextPage: '' };
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HOTEL_ATTEMPT:
      return { ...state, loading: true };

    case GET_HOTEL_SUCCESS:
      return {
        hotels: action.hotels,
        nextPage: action.nextPage,
        loading: false,
      };

    default:
      return state;
  }
};