import React, { useEffect } from "react";
import { ButtonToolbar, DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

import { data } from "../dummycomps/Data";
import "../css/Data.css";

import {
  setData,
  deleteUnit,
  startEdit,
  saveEdit,
  handleChange,
  addData,
  logout,
  cancelEdit
} from "../actions/actions";

const labelArr = data.labels;

const DataSubmission = ({
  //mapStateToProps
  editing,
  // data,
  dataToEdit,
  newData,
  //import from '../actions/actions
  setData,
  deleteUnit,
  startEdit,
  saveEdit,
  handleChange,
  addData,
  logout,
  cancelEdit
}) => {
  // useEffect(() => {
  // labelArr = getData(data.labels);
  // }, []);

  const dropDown1 = "Drop Down 1";
  // console.log("DataSubmission > labelArr", labelArr);
  // console.log("DataSubmission, data.datasets.length:", data.datasets.length);

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
        <h3>SPIDERGRAPH DATA:</h3>
        <div className="data-header">
          <span className="branch-names">Dataset Names</span>
          {/* mapping branch names */}
          {data.labels.map(branchName => (
            <span className="branch-names">{branchName}</span>
          ))}
        </div>
        <ul>
          {data.datasets.map(dataset => (
            <li key={dataset.id} onClick={() => startEdit(dataset)}>
              <button
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  deleteUnit(dataset);
                }}
              >
                -
              </button>
              <span className="dataset-names">{dataset.label}</span>
              {dataset.data.map(value => (
                <span className="data">{value}</span>
              ))}
            </li>
          ))}
        </ul>
      </section>
      {editing ? (
        // add "editing" fields
        <h3>editing...</h3>
      ) : (
        <section className="newDataset">
          <h3>New DataSet</h3>
          <form
            onSubmit={e => {
              addData(e, newData);
            }}
          >
            <input
              name="newDataName"
              type="text"
              placeholder="New Dataset Name"
              className="newDataset-name"
              onChange={e => handleChange(e, "newDataName")}
              value={newData.label}
            />
            <div className="newDataset-data">
              {data.labels.map((dataValue, index) => (
                <input
                  type="text"
                  placeholder={`value${index + 1}`}
                  className="newData-input"
                  value={newData.data[index]}
                  onChange={e => handleChange(e, "newData")}
                />
              ))}
            </div>
            <button type="submit">Add Dataset</button>
          </form>
        </section>
      )}
      <section className="newBranch">
        <h3>New Branch</h3>
        <input type="text" placeholder="New Branch Name" />
        <button>Create New Branch</button>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  // data: state.chartData.datasets,
  editing: state.isEditing,
  dataToEdit: state.dataToEdit,
  newData: state.newData
});

export default connect(mapStateToProps, {
  setData,
  deleteUnit,
  startEdit,
  saveEdit,
  handleChange,
  addData,
  logout,
  cancelEdit
})(DataSubmission);