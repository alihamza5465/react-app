import React, { Component } from "react";
import "./components.css";

class InputContainerforClient extends Component {
  constructor() {
    super();
    this.state = {
      inputFields: false,
    };
  }
  render() {
    return (
      <>
        {this.state.inputFields === false ? (
          <div className="container-section">
            <div className="bg">
              <h2>Add New Client</h2>
            </div>
            <div className="bg">
              <button
                onClick={() => {
                  this.setState({
                    ...this.state,
                    inputFields: true,
                  });
                }}
              >
                Add Client
              </button>
            </div>
          </div>
        ) : (
          <div className="container-section2">
            <div className="bg">
              <h2>Add New Client</h2>
            </div>
            <div className="userInputFields">
              <input
                type="text"
                value={this.props.valueData.userFirstName}
                placeholder="First Name"
                onChange={(e) =>
                  this.props.inputDataHandler("userFirstName", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                value={this.props.valueData.userLastName}
                onChange={(e) =>
                  this.props.inputDataHandler("userLastName", e.target.value)
                }
              />
              <input
                type="text"
                value={this.props.valueData.userEmail}
                placeholder="Email Address"
                onChange={(e) =>
                  this.props.inputDataHandler("userEmail", e.target.value)
                }
              />
              <input
                type="text"
                value={this.props.valueData.userCompany}
                placeholder="Company"
                onChange={(e) =>
                  this.props.inputDataHandler("userCompany", e.target.value)
                }
              />
              <input
                type="text"
                value={this.props.valueData.userPhoneNo}
                placeholder="Phone Number"
                onChange={(e) =>
                  this.props.inputDataHandler("userPhoneNo", e.target.value)
                }
              />
              <select>
                <option>User Role</option>
                <option>Admin</option>
                <option>User</option>
                <option>Third party</option>
              </select>
              <input
                type="text"
                placeholder="Password"
                value={this.props.valueData.userPassowrd}
                onChange={(e) =>
                  this.props.inputDataHandler("userPassowrd", e.target.value)
                }
              />
            </div>
            <div className="bg">
              <button onClick={(e) => this.props.inputSubmitData(e)}>
                Add Client
              </button>
              <button
                id="cancelBtn"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    inputFields: false,
                  });
                }}
              >
                CANCEL
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default InputContainerforClient;
