import { CHANGE_LANG } from "../types";
import { NativeModules } from 'react-native';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const LangCode = deviceLanguage.substring(0, deviceLanguage.indexOf('_'))

const INITIAL_STATE = {
  locale: LangCode,
  isRTL: LangCode == 'en' ? false : true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        locale: action.payload.locale,
        isRTL: action.payload.isRTL,
      };
    default:
      return state;
  }
};
