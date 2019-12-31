import React from "react";
import { connect } from "react-redux";

const UserData = () => {
  return <div>UserData</div>;
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, {})(UserData);
