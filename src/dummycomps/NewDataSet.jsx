import React, { useEffect, setState } from "react";
import { connect } from "react-redux";

import { addData, handleChange, handleNewDataset } from "../actions/actions";

const NewDataSet = ({
  //props passed down...
  userData,
  //mapStateToProps...
  newData,
  //import from actions...
  addData,
  handleChange,
  handleNewDataset
}) => {
  const { labels } = userData;
  // console.log("NewDataSet>userData:", userData);

  useEffect(() => {
    console.log("NewDataSet>userData, newData:\n", userData, "\n", newData);
  });

  return (
    <div>
      <h3>New DataSet</h3>
      <form
        onSubmit={e => {
          addData(e, newData);
        }}
      >
        <input
          name="label"
          type="text"
          placeholder="New Dataset Name"
          className="newDataset-name"
          onChange={e => handleChange(e, "newData")}
          value={newData.label}
        />
        <div className="newDataset-data">
          {labels.map((dataValue, index) => {
            // console.log("labels.map", newData);
            return (
              <input
                id={index}
                name={`data`}
                type="number"
                min="0"
                max="100"
                placeholder={`dataset ${index}`}
                className="newData-input"
                value={newData.data[index]}
                onChange={e => {
                  // console.log(e.target, index);
                  handleNewDataset(e, "newData");
                }}
              />
            );
          })}
        </div>
        <button type="submit">Add Dataset</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
  newData: state.newData
});

export default connect(mapStateToProps, {
  addData,
  handleChange,
  handleNewDataset
})(NewDataSet);