import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
         <NavLink activeClassName="selected" className="nav-link" to="/">Home</NavLink>
         <span> | </span>
         <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
         <span> | </span>
         <NavLink activeClassName="selected" className="nav-link" to="/portfolio">Portfolio</NavLink>
         <span> | </span>
         <NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink>
         <span> | </span>
         <NavLink activeClassName="selected" className="nav-link" to="/references">References</NavLink>
        </nav>
      </div>
    );
  }
}

export default NavBar;
