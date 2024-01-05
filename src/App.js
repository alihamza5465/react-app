import React, { Component } from "react";
import Client from "./pages/Clientpage";
import Users from "./pages/Userpage";
import Nav from "./components/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageHandler: "Client",
    };
  }
  pageChange(page) {
    this.setState({
      ...this.state,
      pageHandler: page,
    });
  }

  render() {
    console.log(this.state.pageHandler);
    return (
      <>
        <Nav pageChange={(e) => this.pageChange(e)} />
        {this.state.pageHandler === "Client" ? <Client /> : <></>}
        {/* <Homepage /> */}
        {this.state.pageHandler === "User" ? <Users /> : <></>}
      </>
    );
  }
}

export default App;
