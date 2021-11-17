import Toast from 'react-native-toast-message';

export const showToast = (msg, type, autoHide, details) => {
  Toast.show({
    type: type ? type : 'error',
    text1: msg,
    text2: details,
    visibilityTime: 2000,
    autoHide: autoHide,
  });
};

export const emailValidation = text => {
  if (text == '') return true;
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

