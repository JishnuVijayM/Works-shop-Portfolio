import React from "react";
import "./Navbar.css"; 

export const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo">
                <i>PORTFOLIO</i>
            </div>
            <button className="menu-btn" aria-controls="navbar-default" aria-expanded="false">
                <svg className="menu-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
        </div>
    );
};
