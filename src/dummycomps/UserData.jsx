import React from "react";
import { connect } from "react-redux";

import { startEdit, deleteUnit } from "../actions/actions";

const UserData = ({ userData, startEdit, deleteUnit, state, derpData }) => {
  const { labels, datasets } = userData;
  console.log(
    "UserData>",
    `userData: ${userData}\n`,
    `labels: ${labels}\n`,
    `datasets: ${datasets}\n`,
    `state:${state.userData}`,
    `derp: ${derpData}`
  );
  console.log(datasets, datasets.lenght);
  var sizeDerp = Object.keys(datasets).length;
  console.log(sizeDerp);
  return (
    <div>
      <h3>UserData:</h3>
      <div className="data-header">
        <span className="branch-names">Dataset Names</span>
        {/* mapping branch names */}
        {labels.map(branchName => (
          <span key={branchName} className="branch-names">
            {branchName}
          </span>
        ))}
      </div>
      {!sizeDerp ? (
        <h5>Loading...</h5>
      ) : (
        // console.log("datasets.length is ")
        <ul>
          {datasets.map(dataset => (
            // {Object.keys(datasets).map(dataset => (
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
              {dataset.data.map((value, index) => (
                <span key={`${dataset.id},${index}`} className="data">
                  {value}
                </span>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
  userData: state.userData,
  state: state,
  derpData: state.userData.datasets
});

export default connect(mapStateToProps, { startEdit, deleteUnit })(UserData);
