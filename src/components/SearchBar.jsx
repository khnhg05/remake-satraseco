import React, { useState, useRef, useEffect } from 'react'
import {Search} from 'lucide-react'
import { useNavbar } from '../context/NavbarContext.js'
import SearchMenu from './SearchMenu.jsx'

export default function SearchBar() {
  const { isScrolled } = useNavbar();
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if(ref.current && !ref.current.contains(e.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, [] );

  return (
    <div className="SearchBar relative" ref={ref}>
      <Search 
        onClick={() => setIsClicked(!isClicked)} 
        className="cursor-pointer h-11 w-auto" 
        color={isScrolled ? "black" : "white"}
        strokeWidth={1.5}
      />

      <SearchMenu hidden={!isClicked} />
    </div>
  )
}
