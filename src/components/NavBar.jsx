"use client";
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import { MAIN_NAV_ITEMS } from '../constants/labels';
import Search from './SearchBar';
import DropdownMenu from './DropdownMenu';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navHeight = navbarRef.current.offsetHeight;
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > navHeight);
      }
  };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div 
      className="NavBar fixed top-0 w-full z-50 transition-all duration-300 ease-in-out"
    >
      <div className="flex justify-between items-center px-4 py-3">
        <div className="Logo">
          <a href="/">
            <img 
              src="/images/logo-img.png" 
              alt="Logo" 
              className="h-6 w-auto sm:h-6 md:h-8 lg:h-10 xl:h-12"
            />
          </a> 
        </div>

        <div className="NavMenuBar flex items-center gap-6">
          {MAIN_NAV_ITEMS.map((item, index) => (
            <div key={index} className="NavItem hover:opacity-75 cursor-pointer">
              {item.label}
            </div>
          ))}

          <Search />
          <DropdownMenu />
        </div>
      </div>
    </div>
  );
}