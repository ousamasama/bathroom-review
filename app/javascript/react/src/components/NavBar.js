import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <nav className="top-bar">
      <section className="top-bar-center">
        <ul className="right">
          <Link to='/users/sign_up'>Sign In / Sign Up</Link>
          {props.children}
        </ul>
      </section>
    </nav>
  )
}

export default NavBar;
