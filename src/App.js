import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RadarChart from "./components/RadarChart";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="navBar">
            <Link to="/">Home</Link>
            <Link to="/spiderchart">Spider Graph</Link>
          </div>
        </header>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/spiderchart" component={RadarChart} />
        </div>
      </Router>
    </div>
  );
}

export default App;
