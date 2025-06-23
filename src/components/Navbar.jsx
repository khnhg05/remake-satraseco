"use client";
import React, { useState, useEffect, useRef } from 'react';
import { MAIN_NAV_ITEMS } from '../constants/labels';
import Search from './SearchBar';
import DropdownButton from './Nav-DropdownButton';
import NavDropdownMenu from './Nav-DropdownMenu';
import { NavbarProvider } from '../context/NavbarContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop >= navbarHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={navbarRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-5 px-7 ${
        isScrolled
          ? 'bg-white opacity-95 shadow-md'
          : 'bg-transparent text-white '
      }`}
    >
      <NavbarProvider isScrolled={isScrolled}>
        <div className="flex justify-between items-center">
          <div className="Logo pl-5">
            <a href="/">
              <img
                src="/images/logo-img.png"
                alt="Logo"
                className="h-4 w-auto sm:h-4 md:h-6 lg:h-8 xl:h-10"
              />
            </a>
          </div>

          <div className="NavMenuBar flex items-center gap-7">
            {MAIN_NAV_ITEMS.map((item, index) => (
              <NavDropdownMenu key={index} item={item} />
            ))}
            <Search />
            <DropdownButton />
          </div>
        </div>
      </NavbarProvider>
    </div>
  );
}
