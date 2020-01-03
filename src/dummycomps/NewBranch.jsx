import React from "react";
import { connect } from "react-redux";

import { addBranch, handleChange } from "../actions/actions";

const NewBranch = ({ newData, newBranch }) => {
  return (
    <div>
      NewBranch
      <form
        onSubmit={e => {
          addBranch(e, newBranch);
        }}
      >
        <h3>New Branch</h3>
        <input
          type="text"
          name="newBranch"
          placeholder="New Branch Name"
          onChange={e => handleChange(e, "newBranch")}
          value={newData.newBranch}
        />
        <button type="submit">Create New Branch</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
  newBranch: state.newBranch,
  newData: state.newData
});

export default connect(mapStateToProps, { addBranch, handleChange })(NewBranch);
