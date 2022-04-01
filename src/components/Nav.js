import React from "react";
import "../App.css"

const NavBar = (props) => {
    return(
        <nav >
        <h1 className="nav">Lambda Eats</h1>
        <ul>
            <li>Home</li>
            <li>Order</li>
        </ul>
        </nav>
    )
}

export default NavBar