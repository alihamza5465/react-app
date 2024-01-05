import React from "react";
import "./components.css";

const EditFormUser = ({ editData, getEditData, editPage, updateData }) => {
  return (
    <>
      <div className="editFrom">
        <h2>EDIT USER DETAILS</h2>
        <div className="editInputFields">
          <input
            type="text"
            value={editData.userFirstName}
            placeholder="First Name"
            onChange={(e) => getEditData("userFirstName", e.target.value)}
          />
          <input
            type="text"
            value={editData.userLastName}
            placeholder="Last Name"
            onChange={(e) => getEditData("userLastName", e.target.value)}
          />
          <input
            type="text"
            value={editData.userPhoneNo}
            placeholder="PHON NO"
            onChange={(e) => getEditData("userPhoneNo", e.target.value)}
          />
          <input
            type="text"
            value={editData.userEmail}
            placeholder="Email"
            onChange={(e) => getEditData("userEmail", e.target.value)}
          />
          <select>
            <option>User Role</option>
            <option>Admin</option>
            <option>User</option>
            <option>Third party</option>
          </select>
        </div>
        <div className="bg">
          <button onClick={(e) => updateData(e)}> UPDATE</button>
          <button id="cancelBtn" onClick={(e) => editPage("false")}>
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
};

export default EditFormUser;
