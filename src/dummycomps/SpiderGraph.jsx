import React, { useEffect } from "react";
import { connect } from "react-redux";

import RadarChart2 from "../components/RadarChart2";
import DataSubmission from "./DataSubmission";

import "../css/Data.css";

const SpiderGraph = ({ reFetch }) => {
  // useEffect(() => {
  //   console.log("SpiderGraph > useEffect > updated;", reFetch);
  // }, [reFetch]);
  useEffect(() => {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    console.log("screen width:", w);
  });

  return (
    <div className="spiderGraph">
      <DataSubmission />
      <RadarChart2 />
    </div>
  );
};

const mapStateToProps = state => ({
  reFetch: state.reFetch
});

export default connect(mapStateToProps)(SpiderGraph);
