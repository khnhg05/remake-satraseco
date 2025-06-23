import React from 'react'
import {Search} from 'lucide-react'
import { useNavbar } from '../context/NavbarContext.js'

export default function SearchBar() {
  const { isScrolled } = useNavbar();
  return (
    <div>
      <Search className="cursor-pointer h-11 w-auto" 
        color={isScrolled ? "black" : "white"}
        strokeWidth={1.5}
      />
    </div>
  )
}
