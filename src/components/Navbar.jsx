import React from "react";
import logo from "../Assets/BlsckAviator.jpg"

export default function Navbar(){
    return(
        <nav className="nav">
            <img className="logo"src={logo} width="40px"/>
            <h3 className="store">RayShades</h3>
            <h4>Luxury Eye Wear</h4>

        </nav>
    )
}