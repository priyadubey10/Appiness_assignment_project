import actionType from "./actionType";

function validationAction(logindata) {
  let validateresult = { msgToShow: "", isValidated: false };

  let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (logindata.username) {
    if (logindata.username.match(mailformat)) {
      if (!logindata.password) {
        validateresult.msgToShow = "Please enter the password";
      } else {
        validateresult.isValidated = true;
      }
    } else {
      validateresult.msgToShow = "Please enter valid email address";
    }
  } else {
    validateresult.msgToShow = "username can not be empty";
  }

  return {
    type: actionType.VALIDATE_CREDENTIALS,
    payload: {
      data: validateresult
    }
  };
}

export default validationAction;
