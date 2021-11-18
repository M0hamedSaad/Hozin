import { combineReducers } from "redux";
import langState from "./lang";
import skipBoardingState from "./skipBoarding";
import userState from "./auth";
import registerUserState from "./registerUser";




export default combineReducers({
  langState,
  userState,
  skipBoardingState,
  registerUserState
});
