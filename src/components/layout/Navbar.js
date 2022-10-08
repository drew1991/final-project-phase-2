import React from "react";
import { Link, NavLink } from "react-router-dom";
import "@fontsource/montez";
import Clock from "../Clock";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        marginTop: "10px",
        backgroundImage: "radial-gradient(circle, #5c0067 0%, #00d4ff 100%)",
        height: "40px",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          href="/"
          style={{
            fontFamily: '"montez","cursive"',
            color: "white",
            marginTop: "50px",
            fontSize: 40,
          }}
        >
          <span>
            <Clock></Clock>
          </span>
          Employee List
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/"
                style={{
                  color: "white",
                  fontSize: "65px",
                  margin: "40px",
                  textShadow: "2px 2px 4px #000000",
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/about"
                style={{
                  color: "white",
                  fontSize: "65px",
                  margin: "40px",
                  textShadow: "2px 2px 4px #000000",
                }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/contact"
                style={{
                  color: "white",
                  fontSize: "65px",
                  margin: "40px",
                  textShadow: "2px 2px 4px #000000",
                }}
              >
                Contact
              </NavLink>
            </li>
            <li></li>
          </ul>
        </div>
        {/* <Link className="btn btn-outline-light" to="/users/add">
          Add User
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
