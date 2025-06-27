import React, {useRef, useEffect, useState} from 'react'
import {Menu} from 'lucide-react'
import { useNavbar } from '../context/NavbarContext.js'
import DropdownMenu from './DropdownMenu.jsx'

export default function DropdownButton() {
  const { isScrolled } = useNavbar();
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef();

  useEffect (() => {
    const handleClick = (e) => {
      if(ref.current && !ref.current.contains(e.target)) {
        setIsClicked(false);
      }
    }

    console.log(isClicked);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <div 
      className="DropdownButton relative z-50 " 
      ref={ref}
    >
      <Menu 
        className="cursor-pointer h-11 w-auto" 
        color={isScrolled ? "black" : "white"}
        strokeWidth={1.5}
        onClick={() => setIsClicked(!isClicked)}
      />
      
      <DropdownMenu 
        hidden={!isClicked} 
      />
    </div>
  )
}