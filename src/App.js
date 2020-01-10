import React, { useEffect } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RadarChart2 from "./components/radarHandling/RadarChart2";
import Home from "./components/Home";
import Login from "./components/Login";
import { logout } from "./actions/actions";
import { pathNames } from "./reducers/reducers";
import PrivateRoute from "./utils/PrivateRoute";

//component testing...
import Register from "./components/Registration";
import DataSubmission from "./components/dataHandling/DataSubmission";
import SpiderGraph from "./components/radarHandling/SpiderGraph";
import { connect } from "react-redux";
import GraphProfiles from "./components/radarHandling/GraphProfiles";

// function App() {
const App = ({ logout, reFetch }) => {
  useEffect(() => {
    console.log("App update");
  }, [reFetch]);

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          {/*  */}
          <div className="navBar">
            <Link to={pathNames.Home}>Home</Link>
            {/* <Link to={pathNames.Login}>Login</Link> */}
            <Link to={pathNames.GraphProfiles}>User Graph Profiles</Link>
            {/* <Link to={pathNames.Register}>Register</Link> */}
            <Link to={pathNames.DataSubmission}>Data Submission</Link>
            <Link to={pathNames.SpiderGraph}>SpiderGraph</Link>
            <Link to={pathNames.Home} onClick={logout}>
              Logout
            </Link>
          </div>
        </header>
        <div>
          <Route exact path={pathNames.Home} component={Home} />
          <Route exact path={pathNames.Login} component={Login} />
          <Route exact path={pathNames.Register} component={Register} />
          <Route
            exact
            path={pathNames.GraphProfiles}
            component={GraphProfiles}
          />
          {/* <Route
            exact
            path={pathNames.DataSubmission}
            component={DataSubmission}
          /> */}
          {/* <Route exact path={pathNames.SpiderGraph} component={SpiderGraph} /> */}
          <PrivateRoute
            exact
            path={pathNames.SpiderChart}
            component={RadarChart2}
          />
          <PrivateRoute
            exact
            path={pathNames.DataSubmission}
            component={DataSubmission}
          />
          <PrivateRoute
            exact
            path={pathNames.SpiderGraph}
            component={SpiderGraph}
          />
        </div>
        {/*  */}
      </Router>
    </div>
  );
};

export default connect(null, { logout })(App);
