import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavbar } from '../context/NavbarContext';

export default function NavDropdown({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isScrolled } = useNavbar();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main menu item */}
      <div className={`NavItem hover:opacity-75 cursor-pointer font-light text-lg flex items-center gap-1 ${
        isScrolled ? 'text-gray-800' : 'text-white'
      }`}>
        <span>{item.label}</span>
        {item.options && item.options.length > 0 && (
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-200 ${
              isHovered ? 'rotate-180' : ''
            }`}
            color={isScrolled ? "black" : "white"}
          />
        )}
      </div>

      {/* Dropdown menu */}
      {item.options && item.options.length > 0 && isHovered && (
        <div className="absolute opacity-98 top-full left-0 mt-2 w-80  bg-white shadow-xl rounded-lg border border-gray-200 z-50 animate-in fade-in duration-200">
          <div className="py-2">
            {item.options.map((option) => (
              <a
                key={option.id}
                href={option.path}
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
              >
                <div className="font-medium text-sm">
                  {option.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
