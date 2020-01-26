import React, { Component } from 'react'
//React Router
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/MyList">MyList</NavLink>
        <NavLink to="/MyList">Other List</NavLink>
      </nav>
    );
  }
}
export default Nav
