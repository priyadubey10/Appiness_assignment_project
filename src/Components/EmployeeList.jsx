import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./EmployeeList.css";

class EmployeeList extends Component {
  handleLogoutClick = () => {
    this.props.onLogout();
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Employee Dashboard</h1>
        </header>
        <table id="employee">
          <tbody>
            <tr>
              {Object.keys(this.props.EmployeeData.user[0]).map(key => (
                <th key={key}>{key}</th>
              ))}
            </tr>
            {this.props.EmployeeData.user.map(data => (
              <tr key={data.id}>
                <td key={data.id.toString() + "c"}>{data.id}</td>
                <td key={data.name.toString() + "c"}>{data.name}</td>
                <td key={data.age.toString() + "c"}>{data.age}</td>
                <td key={data.gender.toString() + "c"}>{data.gender}</td>
                <td key={data.email.toString() + "c"}>{data.email}</td>
                <td key={data.phoneNo.toString() + "c"}>{data.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <br></br>
        <br></br>
        <NavLink
          to="/"
          onClick={this.handleLogoutClick}
          className="logout_button"
        >
          Logout
        </NavLink>
      </React.Fragment>
    );
  }
}

export default EmployeeList;
