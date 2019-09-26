import actionType from "./actionType";
import validationAction from "./validationAction";

function loginUserAction(logindata, storedata) {
  let loginresult = { msgToShow: "", isLoggedIn: false };

  let val_result = validationAction(logindata);

  if (val_result.payload.data.isValidated) {
    if (logindata.username === storedata.username) {
      if (logindata.password === storedata.password) {
        loginresult = { msgToShow: "password matched", isLoggedIn: true };
      } else {
        loginresult.msgToShow = "Incorrect password";
      }
    } else {
      loginresult.msgToShow = "Username does not exist";
    }
  } else {
    loginresult.msgToShow = val_result.payload.data.msgToShow;
  }

  return {
    type: actionType.LOGIN_USER,
    payload: {
      data: loginresult
    }
  };
}

export default loginUserAction;
