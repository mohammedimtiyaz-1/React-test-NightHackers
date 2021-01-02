import React from "react";
import {
  NavLink,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import NotFound from "./NotFound";
import LandingPage from "./Landing/LandingPage";
import Brand from "./Brand";

function Navbar() {
  return (
    <Router>
      <nav className="navbar  navbar-expand-lg navbar-dark sticky-top  nav-background ">
        <span className="navbar-brand nav-title">
          <NavLink activeClassName="" to="/">
            <Brand />
          </NavLink>
        </span>
        <button
          className="navbar-toggler"
          style={{ border: "1px solid black", outline: "none" }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0  ">
            <li className="text-li">
              <NavLink activeClassName="active-button" to="/">
                Home
              </NavLink>
            </li>
            <li className="text-li">
              <NavLink activeClassName="active-button" to="/Products">
                Products
              </NavLink>
            </li>{" "}
            <li className="text-li">
              <NavLink activeClassName="active-button" to="/About">
                About us
              </NavLink>
            </li>{" "}
            <li className="text-li">
              <NavLink activeClassName="active-button" to="/Demos">
                Demos
              </NavLink>
            </li>
            <li className="text-li">
              <NavLink activeClassName="active-button" to="/Contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={LandingPage}>
          {/* </Route>/  <Route exact exact path="/LandingPage" component={LandingPage}> */}
        </Route>

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Navbar;
