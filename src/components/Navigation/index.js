import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return (
<nav className="navbar sticky-top navbar-expand-md navbar-dark">
  <div className="container-fluid">
    <NavLink to="/"
            end className="navbar-brand" href="index.js">FranTiska</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item mx-3">
          <NavLink
            to="about"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink
            to="contact"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


    )
  }
  
  export default Navigation;
  