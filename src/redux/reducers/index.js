import { combineReducers } from "redux";
import langState from "./lang";
import skipBoardingState from "./skipBoarding";
import userState from "./auth";




export default combineReducers({
  langState,
  userState,
  skipBoardingState
});
