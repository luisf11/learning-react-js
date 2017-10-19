import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          <li className="active">
            <Link exact to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contac</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
