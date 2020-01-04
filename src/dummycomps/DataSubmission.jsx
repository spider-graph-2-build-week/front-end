import React, { useEffect } from "react";
import { ButtonToolbar, DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

import { data } from "../dummycomps/Data";
import "../css/Data.css";

import NewBranch from "../dummycomps/NewBranch";
import NewDataSet from "../dummycomps/NewDataSet";
import UserData from "../dummycomps/UserData";

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
  editing,
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
  // console.log("DataSubmission>userData:", userData);
  console.log("state:", state);
  return (
    <div className="dataField-container">
      Data
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
      </DropdownButton>
      <section className="data-display">
        {/* moved information into a component */}
        <UserData userData={userData} />
      </section>
      {editing ? ( //if editing = true...
        // add "editing" fields
        <h3>editing...</h3>
      ) : (
        // if editing = false...
        // add new data

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
  editing: state.isEditing,
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
