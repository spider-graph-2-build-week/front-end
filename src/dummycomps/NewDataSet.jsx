import React, { useEffect } from "react";
import { connect } from "react-redux";

import { addData, handleChange } from "../actions/actions";

const NewDataSet = ({ userData, addData, handleChange, newData }) => {
  useEffect(() => {
    console.log("newData:", newData, newData.data[0]);
    // labels.map(each => {
    //   newData.data[each] = 0;
    // });
  });

  const { labels } = userData;
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
          {labels.map(
            (dataValue, index) => (
              console.log("labels.map", index),
              (
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
                    console.log(e.target, index);
                    handleChange(e, "newData");
                  }}
                />
              )
            )
          )}
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

export default connect(mapStateToProps, { addData, handleChange })(NewDataSet);
