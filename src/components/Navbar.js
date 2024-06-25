import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom";

export class Navbars extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              CRUD
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Get Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/postData">
                    Post Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/updateData">
                    Update Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/deleteData">
                    Delete Data
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbars;
