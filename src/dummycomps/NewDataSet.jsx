import React from "react";
import { connect } from "react-redux";

const NewDataSet = () => {
  return <div>NewDataSet</div>;
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, {})(NewDataSet);
