import React from "react";
import { connect } from "react-redux";

const NewBranch = () => {
  return <div>NewBranch</div>;
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, {})(NewBranch);
