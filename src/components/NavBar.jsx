import React from 'react';
import { MAIN_NAV_ITEMS } from '../constants/labels';

export default function NavBar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <a href="/">
          <img 
            src="/images/logo-img.png" 
            alt="Logo" 
          />
        </a>
      </div>

      <div className="NavMenuBar">
        {MAIN_NAV_ITEMS.map((item, index) => (
          <div key={index} className="NavItem">
            {item.label}
          </div>
        ))}
      </div>

      <div className="SearchBar">

      </div>

      <div className="DropdownMenu">

      </div>
    </div>
  );
}