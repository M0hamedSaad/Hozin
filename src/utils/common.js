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

export const register_validation = (user) => {
  if (user?.username == '') {
    showToast('Error', 'error', true, 'Username is required.')
    return false;
  }
  else if (user?.username?.length < 3) {
    showToast('Error', 'error', true, 'Username is short.')
    return false;
  }
  else if (user?.email == '') {
    showToast('Error', 'error', true, 'E-mail is required.')
    return false;
  }
  else if (!emailValidation(user?.email)) {
    showToast('Error', 'error', true, 'Invalid e-mail.')
    return false;
  }
  else if (user?.password == '') {
    showToast('Error', 'error', true, 'Password is required.')
    return false;
  }
  else if (user?.password?.length < 6) {
    showToast('Error', 'error', true, 'Password is short.')
    return false;
  }
  else
    return true;
}


export const login_validation = (email, password) => {
  if (email == '') {
    showToast('Error', 'error', true, 'E-mail or username is required.')
    return false;
  }
  else if (password == '') {
    showToast('Error', 'error', true, 'Password is required.')
    return false;
  }
  else
    return true;
}