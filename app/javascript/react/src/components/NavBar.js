import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <div className="top-bar">
      <li className="page-title">Home</li>
      {props.children}
    </div>
  )
}

export default NavBar;
