import React, { Component } from "react";
import "./components.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      notification: false,
    };
  }
  render() {
    return (
      <>
        <div className="narBar">
          <div>BRAND NAME</div>
          <div className="tages">
            <a href="#" onClick={(e) => this.props.pageChange("Client")}>
              CLIENTS
            </a>
            <a href="#" onClick={(e) => this.props.pageChange("User")}>
              USERS
            </a>
            <a href="#">ROLES</a>
          </div>
          <div className="last-section">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
                alt="noti"
                onClick={() =>
                  this.setState({
                    ...this.state,
                    notification: !this.state.notification,
                  })
                }
              />
              {this.state.notification === true ? (
                <div class="dropdown-content">
                  <p>No New Notification</p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <a href="#">
              <img
                src="https://instacaptionsforall.in/wp-content/uploads/2023/11/85-1-1024x1024.jpg"
                alt="dp"
              />{" "}
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
