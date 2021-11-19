import { combineReducers } from "redux";
import langState from "./lang";
import skipBoardingState from "./skipBoarding";
import userState from "./auth";
import registerUserState from "./registerUser";
import hotelsState from "./getHotels";




export default combineReducers({
  langState,
  userState,
  skipBoardingState,
  registerUserState,
  hotelsState
});
