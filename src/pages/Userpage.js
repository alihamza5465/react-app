import React, { Component } from "react";
import ListOfUser from "../components/Userlist";
import EditFormUser from "../components/EditFormUser";
import InputContainerforUser from "../components/InputContaierofUser";

export class Users extends Component {
  constructor() {
    super();
    this.state = {
      page: false,
      userdatabase: [
        {
          userFirstName: "Ali",
          userLastName: "Hamza",
          userEmail: "hbutt5465@gmail.com",
          userPhoneNo: "03206006501",
          userRole: "Admin",
          userPassowrd: "**********",
        },
      ],
      userInputFields: {
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        userPhoneNo: "",
        userRole: "",
        userPassowrd: "",
      },
      editInput: {
        userIndex: "",
        userFirstName: "",
        userLastName: "",
        userPhoneNo: "",
        userEmail: "",
      },
      searchItem: "",
    };
  }
  inputDataHandler(key, value) {
    this.setState({
      ...this.state,
      userInputFields: {
        ...this.state.userInputFields,
        [key]: value,
      },
    });
  }
  inputSubmitData() {
    const tempData = this.state.userdatabase;
    tempData.push(this.state.userInputFields);
    this.setState({
      ...this.state,
      userdatabase: tempData,
    });
    this.setState({
      ...this.state,
      userInputFields: {
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        userCompany: "",
        userPhoneNo: "",
        userRole: "",
        userPassowrd: "",
      },
    });
  }
  inputDeleteHandler(index) {
    if (!index && index !== 0) {
      alert("NO INDEX");
      return;
    }
    if (window.confirm("Are you sure to delete this data")) {
      const newDatabase = this.state.userdatabase.filter(
        (e, id) => id !== index
      );
      this.setState({
        ...this.state,
        userdatabase: newDatabase,
      });
    }
  }
  editPage(page) {
    this.setState({
      ...this.state,
      page: page,
    });
  }
  inputEditHandler(index) {
    this.setState({
      ...this.state,
      page: true,
      editInput: {
        userIndex: index,
        userFirstName: this.state.userdatabase[index].userFirstName,
        userLastName: this.state.userdatabase[index].userLastName,
        userPhoneNo: this.state.userdatabase[index].userPhoneNo,
        userEmail: this.state.userdatabase[index].userEmail,
      },
    });
  }
  updateData(key, value) {
    this.setState({
      ...this.state,
      editInput: {
        ...this.state.editInput,
        [key]: value,
      },
    });
  }
  updateDatabase() {
    const newData = this.state.userdatabase.map((item, index) => {
      if (index === this.state.editInput.userIndex) {
        return {
          ...item,
          userFirstName: this.state.editInput.userFirstName,
          userLastName: this.state.editInput.userLastName,
          userPhoneNo: this.state.editInput.userPhoneNo,
          userEmail: this.state.editInput.userEmail,
        };
      } else {
        return item;
      }
    });
    this.setState({
      ...this.state,
      userdatabase: newData,
      page: false,
    });
  }
  changeDatabase(e) {
    this.setState({
      ...this.state,
      searchItem: e.target.value,
    });
    // console.log(this.state.searchItem);
  }
  render() {
    // console.log(this.state.editInput);
    // console.log(this.state.editPage);
    const filterItems = this.state.userdatabase.filter((item) => {
      return item.userFirstName
        .toLowerCase()
        .includes(this.state.searchItem.toLowerCase());
    });
    return (
      <>
        <div style={{ position: "absolute", width: "100%" }}>
          {/* <Nav /> */}
          <InputContainerforUser
            inputDataHandler={(e, val) => this.inputDataHandler(e, val)}
            inputSubmitData={(e) => this.inputSubmitData(e)}
            valueData={this.state.userInputFields}
          />
          <ListOfUser
            // dataBase={this.state.userdatabase}
            dataBase={filterItems}
            deleteData={(e) => this.inputDeleteHandler(e)}
            editItem={(e) => this.inputEditHandler(e)}
            changeDb={(e) => this.changeDatabase(e)}
          />
        </div>
        <div
          style={{
            position: "relative",
            margin: "auto",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          {this.state.page === true ? (
            <EditFormUser
              editPage={(e) => this.editPage(e)}
              editData={this.state.editInput}
              getEditData={(key, value) => this.updateData(key, value)}
              updateData={(e) => this.updateDatabase(e)}
            />
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}

export default Users;
