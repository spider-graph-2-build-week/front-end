import React, { useEffect } from "react";
import { ButtonToolbar, DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

import { data } from "../dummycomps/Data";
import "../css/Data.css";

import NewBranch from "../dummycomps/NewBranch";
import NewDataSet from "../dummycomps/NewDataSet";
import UserData from "../dummycomps/UserData";
import EditData from "../components/dataHandling/EditData";

import {
  setData,
  deleteUnit,
  startEdit,
  saveEdit,
  handleChange,
  addData,
  logout,
  cancelEdit,
  getData,
  addBranch
} from "../actions/actions";

const labelArr = data.labels;

const DataSubmission = ({
  //mapStateToProps
  isEditing,
  dataToEdit,
  newData,
  newBranch,
  reFetch,
  userData,
  state,
  //import from '../actions/actions
  setData,
  deleteUnit,
  startEdit,
  saveEdit,
  handleChange,
  addData,
  logout,
  cancelEdit,
  getData
}) => {
  useEffect(() => {
    getData(userData);
    console.log("DataSumbission>getData", userData);
  }, [reFetch]);

  const dropDown1 = "Drop Down 1";
  console.log("state:", state);
  console.log("isEditing", isEditing);
  return (
    <div className="dataField-container">
      Data
      {!isEditing ? (
        <button onClick={() => startEdit()}>Edit Data</button>
      ) : (
        <button onClick={() => cancelEdit()}>Cancel Edit</button>
      )}
      <DropdownButton
        title={dropDown1}
        id={`dropdown-variants-${dropDown1}`}
        key={dropDown1}
      >
        <div className="dropdown-option-show">
          <Dropdown.Item eventKey="1">%</Dropdown.Item>
          <Dropdown.Item eventKey="2">Scale</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Point Limit
          </Dropdown.Item>
        </div>
        {/* clean up below?? */}
      </DropdownButton>
      <section className="data-display">
        <UserData userData={userData} />
      </section>
      {isEditing ? ( //if isEditing = true...
        <section className="newDataset">
          <EditData userData={userData} />
        </section>
      ) : (
        // if isEditing = false...
        <section className="newDataset">
          <NewDataSet userData={userData} />
        </section>
      )}
      <section className="newBranch">
        <NewBranch />
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  // data: state.chartData.datasets,
  isEditing: state.isEditing,
  dataToEdit: state.dataToEdit,
  newData: state.newData,
  newBranch: state.newBranch,
  reFetch: state.reFetch,
  userData: state.userData,
  state: state
});

export default connect(mapStateToProps, {
  setData,
  deleteUnit,
  startEdit,
  saveEdit,
  handleChange,
  addData,
  logout,
  cancelEdit,
  getData
})(DataSubmission);
