import React from 'react'
import {Menu} from 'lucide-react'
import { useNavbar } from '../context/NavbarContext.js'

export default function DropdownMenu() {
  const { isScrolled } = useNavbar();
  return (
    <div className="DropdownMenu z-index-51">
      <Menu className="cursor-pointer h-11 font-thin w-auto" 
        color={isScrolled ? "black" : "white"}
        strokeWidth={1.5}
      />
    </div>
  )
}