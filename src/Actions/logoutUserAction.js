import actionType from "./actionType";

function logoutUserAction() {
  let logoutresult = { msgToShow: "", isLoggedIn: false };

  return {
    type: actionType.LOGOUT_USER,
    payload: {
      data: logoutresult
    }
  };
}

export default logoutUserAction;
