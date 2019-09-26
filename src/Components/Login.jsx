import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const usernameval = event.target.elements.username.value;
    const passwordval = event.target.elements.password.value;

    const logindata = {
      username: usernameval,
      password: passwordval
    };

    this.props.getLoginData(logindata);
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/Dashboard/" />;
    }
    return (
      <React.Fragment>
        <header>
          <h1>Login</h1>
        </header>
        <article className="form-submit">
          <form onSubmit={this.handleSubmit}>
            <label>User Name</label>
            <input type="text" name="username"></input>
            <br></br>
            <br></br>
            <label>Password</label>
            <input type="password" name="password"></input>
            <br></br>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
          <br></br>
          <br></br>
          <span style={{ color: "red" }}>{this.props.msgToShow}</span>
        </article>
      </React.Fragment>
    );
  }
}

export default Login;
