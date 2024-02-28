import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <header className="main-header clearfix head1" role="header">
                <div className="logo">
                    <img className="logo" src={logo} />
                </div>
                <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
                <nav id="menu" className="main-nav" role="navigation">
                    <ul className="main-menu">
                        <li><a href="#home">Home</a></li>
                        <li className="has-submenu"><a href="#section2">About Us</a>
                            <ul className="sub-menu">
                                
                                <li><a href="#section3">What we do?</a></li>
                                <li><a href="#section3">How it works?</a></li>
                                {/* <li><a href="https://templatemo.com/about" rel="sponsored" className="external">External URL</a></li> */}
                            </ul>
                        </li>
                        <li><a href="#section4">Courses</a></li>
                        <li><a href="#register">Register</a></li>
                        
                        <li><a href="#section6">Contact</a></li>
                        {/* <li><a href="" className="external">External</a></li> */}
                        {/* <li><Link tag="a" to="/developer">Developer</Link></li> */}
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Navbar;