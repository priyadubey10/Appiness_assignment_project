import React, { Component } from "react";
import Login from "./Components/Login";
import EmployeeList from "./Components/EmployeeList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import loginUserAction from "./Actions/loginUserAction";
import validationAction from "./Actions/validationAction";
import logoutUserAction from "./Actions/logoutUserAction";

class App extends Component {
  // state = {
  //   logindata: { username: "hruday@gmail.com", password: "hruday123" },
  //   dashboard_data: {
  //     user: [
  //       {
  //         id: "1",
  //         name: "test1",
  //         age: "11",
  //         gender: "male",
  //         email: "test1@gmail.com",
  //         phoneNo: "9413539876"
  //       },
  //       {
  //         id: 2,
  //         name: "test2",
  //         age: "12",
  //         gender: "male",
  //         email: "test2@gmail.com",
  //         phoneNo: "9415346314"
  //       },
  //       {
  //         id: 3,
  //         name: "test3",
  //         age: "13",
  //         gender: "male",
  //         email: "test3@gmail.com",
  //         phoneNo: "9415346315"
  //       },
  //       {
  //         id: 4,
  //         name: "test4",
  //         age: "14",
  //         gender: "male",
  //         email: "test4@gmail.com",
  //         phoneNo: "9415346316"
  //       },
  //       {
  //         id: 5,
  //         name: "test5",
  //         age: "15",
  //         gender: "male",
  //         email: "test5@gmail.com",
  //         phoneNo: "9415346317"
  //       },
  //       {
  //         id: 6,
  //         name: "test6",
  //         age: "16",
  //         gender: "male",
  //         email: "test6@gmail.com",
  //         phoneNo: "9415346318"
  //       }
  //     ]
  //   },
  //   msgToShow: "",
  //   isLoggedIn: false
  // };

  //validateCredentials = logindata => {
  // let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  // let validateflag = false;
  // if (logindata.username) {
  //   if (logindata.username.match(mailformat)) {
  //     if (!logindata.password) {
  //       this.setState({ msgToShow: "Please enter the password" });
  //     } else {
  //       validateflag = true;
  //     }
  //   } else {
  //     this.setState({ msgToShow: "Please enter valid email address" });
  //   }
  // } else {
  //   this.setState({ msgToShow: "username can not be empty" });
  // }
  // return validateflag;
  //};

  handleLogin = logindata => {
    //this.props.validationAction(logindata);
    // let validateflag = this.validateCredentials(logindata);
    // if (validateflag) {
    // if (logindata.username === this.state.logindata.username) {
    //   if (logindata.password === this.state.logindata.password) {
    //     this.setState({ msgToShow: "password matched", isLoggedIn: true });
    //   } else {
    //     this.setState({ msgToShow: "Incorrect password" });
    //   }
    // } else {
    //   this.setState({ msgToShow: "Username does not exist" });
    // }
    //}
    //console.log("props isValidated : ", this.props.isValidated);
    //console.log("props msgToShow : ", this.props.msgToShow);
    this.props.loginUserAction(logindata, this.props.logindata);
  };

  handleLogout = () => {
    this.props.logoutUserAction();
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <Login
                  getLoginData={this.handleLogin}
                  msgToShow={this.props.msgToShow}
                  isLoggedIn={this.props.isLoggedIn}
                />
              )}
            />
            <Route
              path="/Dashboard/"
              render={() => (
                <EmployeeList
                  EmployeeData={this.props.dashboard_data}
                  onLogout={this.handleLogout}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("Store : ", state);
  return state;
}

function mapDispatchToProps(dispatch) {
  //console.log(dispatch);
  return bindActionCreators(
    { loginUserAction, validationAction, logoutUserAction },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//export default App;
