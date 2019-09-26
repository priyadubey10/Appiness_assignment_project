import actionType from "../Actions/actionType";

let initialState = {
  logindata: { username: "hruday@gmail.com", password: "hruday123" },
  dashboard_data: {
    user: [
      {
        id: "1",
        name: "test1",
        age: "11",
        gender: "male",
        email: "test1@gmail.com",
        phoneNo: "9413539876"
      },
      {
        id: 2,
        name: "test2",
        age: "12",
        gender: "male",
        email: "test2@gmail.com",
        phoneNo: "9415346314"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 4,
        name: "test4",
        age: "14",
        gender: "male",
        email: "test4@gmail.com",
        phoneNo: "9415346316"
      },
      {
        id: 5,
        name: "test5",
        age: "15",
        gender: "male",
        email: "test5@gmail.com",
        phoneNo: "9415346317"
      },
      {
        id: 6,
        name: "test6",
        age: "16",
        gender: "male",
        email: "test6@gmail.com",
        phoneNo: "9415346318"
      }
    ]
  },
  msgToShow: "",
  isLoggedIn: false,
  isValidated: false
};

function mainReducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  //console.log("Action Type : ", action);
  switch (action.type) {
    case actionType.VALIDATE_CREDENTIALS:
      // console.log(
      //   "inside mainReducer : calling VALIDATE_CREDENTIALS ",
      //   action.payload.data
      // );

      newState.isValidated = action.payload.data.isValidated;
      newState.msgToShow = action.payload.data.msgToShow;
      return newState;

    case actionType.LOGIN_USER:
      // console.log(
      //   "inside mainReducer : calling LOGIN_USER ",
      //   action.payload.data
      // );

      newState.isLoggedIn = action.payload.data.isLoggedIn;
      newState.msgToShow = action.payload.data.msgToShow;
      return newState;

    case actionType.LOGOUT_USER:
      // console.log(
      //   "inside mainReducer : calling LOGOUT_USER ",
      //   action.payload.data
      // );
      newState.isLoggedIn = action.payload.data.isLoggedIn;
      newState.msgToShow = action.payload.data.msgToShow;
      return newState;

    default:
      // console.log("inside mainReducer :  Calling default");
      return state;
  }
}

export default mainReducer;
