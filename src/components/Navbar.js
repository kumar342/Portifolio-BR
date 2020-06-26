import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ backgroundColor: "#0074D9" }}
        >
          <i className="fa fa-user-o" style={{ color: "white" }}></i>&nbsp;
          <a className="navbar-brand">
            &nbsp;Hemanth Kumar <br />
            {/* <span style={{ fontFamily: "Arial", fontSize: "0.8rem" }}>MERN Stack Developer</span> */}
          </a>
          {/* <a className="navbar-brand" >MERN Stack Developer</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <Link to={"/"} className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to={"/about"} className="nav-link">
                  About <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to={"/blogs"} className="nav-link">
                  Blogs <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to={"/skills"} className="nav-link">
                  Skills <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to={"/projects"} className="nav-link">
                  Projects <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
