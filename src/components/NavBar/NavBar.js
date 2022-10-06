import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo.png";

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <img src={logo} alt='Logo' className='logo' />
        </Link>

        <ul className='nav-menu'>
          <li className='nav-item'>
            <NavLink to='/' className={({isActive}) => (isActive ? "nav-link-active" : 'nav-link')} end>
              Accueil
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className={({isActive}) => (isActive ? "nav-link-active" : 'nav-link')}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;