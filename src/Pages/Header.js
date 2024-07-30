import React from 'react';
import "../Style/Header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
    const { user } = useSelector((state) => state.auth);
    return(
        <>
        <div className="header">
            <div className="logo">
                Agritracka
            </div>
            <div className="navbar">
                <a className="active" href="#home"><Link to="/"> Home </Link></a>
                <a href="#about">About</a>
                <a href="#contact">Contact </a>
                {user && <a href="#log">Log</a>}
            </div>
        </div> 
        </>
    )
}

export default Header;