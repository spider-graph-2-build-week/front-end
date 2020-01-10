import React, { useEffect } from "react";
import { connect } from "react-redux";

import "../css/Data.css";

import { getData } from "../actions/actions";

const GraphProfiles = ({ userData2, reFetch, getData }) => {
  useEffect(() => {
    getData(userData2);
    console.log("GraphProfiles>getData", userData2);
  }, []);

  console.log(userData2.graphs[0].id);
  return (
    <div>
      <h2>Graph 1 Data...</h2>
      {!userData2.graphs[0].id ? (
        <h5>Loading User Graphs...</h5>
      ) : (
        <div>
          <h2>userData2.graphs.</h2>
          {userData2.graphs.map((graph, index) => {
            console.log(graph);
            return (
              <a className="graph-details">
                {/* <Link to={graphDetail(id)} className="graph-details"> */}
                <span>{graph.title}</span>
                <span>{graph.description}</span>
                <span># of datasets: {graph.datasets.length}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  userData2: state.userData2,
  reFetch: state.reFetch
});

export default connect(mapStateToProps, { getData })(GraphProfiles);
