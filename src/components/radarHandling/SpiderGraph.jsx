import React, { useEffect } from "react";
import { connect } from "react-redux";

import RadarChart2 from "./RadarChart2";
import DataSubmission from "../dataHandling/DataSubmission";
import EditData from "../dataHandling/EditData";

import "../../css/Data.css";

const SpiderGraph = ({ reFetch, isEditing }) => {
  // useEffect(() => {
  //   console.log("SpiderGraph > useEffect > updated;", reFetch);
  // }, [reFetch]);
  useEffect(() => {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    // console.log("screen width:", w);
  });

  return (
    <section>
      {!isEditing ? (
        <div className="spiderGraph">
          <DataSubmission />
          <RadarChart2 />
        </div>
      ) : (
        <EditData />
      )}
    </section>
  );
};

const mapStateToProps = state => ({
  reFetch: state.reFetch,
  isEditing: state.isEditing
});

export default connect(mapStateToProps)(SpiderGraph);
