import React, { useEffect } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RadarChart2 from "./components/RadarChart2";
import Home from "./components/Home";
import Login from "./components/Login";
import { logout } from "./actions/actions";

//component testing...
import Register from "./dummycomps/Registration";
import DataSubmission from "./dummycomps/DataSubmission";
import SpiderGraph from "./dummycomps/SpiderGraph";
import { connect } from "react-redux";

const pathNames = [
  "/",
  "/login",
  "/spiderchart",
  "/register",
  "/submission",
  "/spiderGraph"
];

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
            <Link to={pathNames[0]}>Home</Link>
            <Link to={pathNames[1]}>Login</Link>
            <Link to={pathNames[2]}>Spider Graph</Link>
            <Link to={pathNames[3]}>Register</Link>
            <Link to={pathNames[4]}>Data Submission</Link>
            <Link to={pathNames[5]}>SpiderGraph</Link>
            <Link to={pathNames[0]} onClick={logout}>
              Logout
            </Link>
          </div>
        </header>
        <div>
          <Route exact path={pathNames[0]} component={Home} />
          <Route exact path={pathNames[1]} component={Login} />
          <Route exact path={pathNames[2]} component={RadarChart2} />
          {/* <PrivateRoute exact path={pathNames[2]} component={RadarChart2} /> */}
          {/* <PrivateRoute exact path={pathNames[4]} component={DataSubmission} /> */}
          <Route exact path={pathNames[3]} component={Register} />
          <Route exact path={pathNames[4]} component={DataSubmission} />
          <Route exact path={pathNames[5]} component={SpiderGraph} />

          {/* <Route exact path={pathNames[0]} component={Logout} /> */}
        </div>
        {/*  */}
      </Router>
    </div>
  );
};

export default connect(null, { logout })(App);
