import React from "react";
import { Link , Route } from "react-router-dom";
import "../App.css"

const NavBar = (props) => {
    return(
        <nav className="nav">
        <h1 >Lambda Eats</h1>
        <ul className="navlinks">
            <Link to="/"><li>Home</li></Link>
           <Link to="/pizza"><li>Order</li></Link>
        </ul>
        </nav>
    )
}

export default NavBar