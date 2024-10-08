import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarComponent.css'

import logo from "../../assets/logo.jpg"

export default function PropertyNavbarComponent() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="nav_header">
      <div className="nv_logo" onClick={closeNav} style={{ cursor: 'pointer' }}>
        <Link to="/">
          <img className="logo_class" src={logo} alt="logo" />
        </Link>
      </div>
      <input type="checkbox" id="nav_check" checked={isNavOpen} onChange={() => setIsNavOpen(!isNavOpen)} hidden />
      <nav style={{ left: isNavOpen ? '0' : '-300px', transition: 'left 0.3s ease-in-out' }}>
        <div className="nv_logo">
          <Link to="/">
            <img className="logo_class" src={logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/propertybuy" className={location.pathname === '/propertybuy' ? 'active' : ''} onClick={closeNav}>
              BUY
            </Link>
          </li>
          <li>
            <Link to="/propertysell" className={location.pathname === '/propertysell' ? 'active' : ''} onClick={closeNav}>
              SELL
            </Link>
          </li>
          <li>
            <Link to="/propertyrent" className={location.pathname === '/propertyrent' ? 'active' : ''} onClick={closeNav}>
              RENT
            </Link>
          </li>
          <li>
            <Link to="/rentacar"
              className={`${location.pathname === '/rentacar' ? 'active ' : ''}Car`} onClick={closeNav}>
              RENT A CAR
            </Link>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  );
}
