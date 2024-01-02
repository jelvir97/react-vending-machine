import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"
const NavBar =()=>{
    return (
        <nav className="NavBar">
            <NavLink to="/"> Vending Machine</NavLink>
            <NavLink to="/chips"> Chips</NavLink>
            <NavLink to="/candy"> Candy</NavLink>
            <NavLink to="/chocolate"> Chocolate</NavLink>
        </nav>
    )
}

export default NavBar;