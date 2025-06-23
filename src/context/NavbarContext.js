import React, { createContext, useContext} from 'react';

const NavbarContext = createContext();

export const useNavbar = () => {
    const context = useContext(NavbarContext);
    if (context === undefined) {
        throw new Error('useNavbar must be used within a NavbarProvider');
    }
    return context;
}

export const NavbarProvider = ({ children, isScrolled }) => {
    return (
        <NavbarContext.Provider value={{ isScrolled }}>
            {children}
        </NavbarContext.Provider>
    );
};