import React, { Component } from "react";
import "./components.css";
// import DeleteIcon from "@mui/icons-material/Delete";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

class ListOfClients extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="ClientsData">
          <div className="ClientsSearch">
            <input
              type="text"
              placeholder="Search For UserName"
              onChange={this.props.changeDb}
            />
          </div>
          <table>
            <tr>
              <th>NAME</th>
              <th>COMPANY</th>
              <th>PHONE NUMBER</th>
              <th>EMAIL</th>
              <th>ACTIONS</th>
            </tr>
            {this.props.dataBase.map((e, index) => (
              <tr>
                <td>
                  {e.userFirstName} {e.userLastName}
                </td>
                <td>{e.userCompany}</td>
                <td>{e.userPhoneNo}</td>
                <td>{e.userEmail}</td>
                <td>
                  {" "}
                  <div className="actionIcon">
                    <a href="#" onClick={(e) => this.props.editItem(index)}>
                      <MdModeEdit />
                    </a>
                    <a href="#" onClick={(e) => this.props.deleteData(index)}>
                      <MdDelete />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>Ali Hamza</td>
              <td>Cipher developer</td>
              <td>03206006501</td>
              <td>hbutt5465@gmail.com</td>
              <td>
                <div className="actionIcon">
                  <a href="#">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/essential-21/128/Edit-512.png "
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyAI4zs-PutBXWBNkjI6kBTRJXFWlNXQ1jAunNCaJpfzxkvxFyCXWCM52JF5y9bv2cz8&usqp=CAU"
                      alt=""
                    />
                  </a>
                </div>
              </td>
            </tr> */}
          </table>
        </div>
      </>
    );
  }
}

export default ListOfClients;
