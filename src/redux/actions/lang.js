import { I18nManager } from "react-native";
import RNRestart from "react-native-restart";
import { CHANGE_LANG } from "../types";

export const changeLang = (payload) => {
  return (dispatch) => {
    I18nManager.forceRTL(payload.isRTL)
    I18nManager.allowRTL(payload.isRTL)
    dispatch({
      type: CHANGE_LANG,
      payload,
    });
    RNRestart.Restart();
  }
};