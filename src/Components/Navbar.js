import React from 'react';
import '../Components/navbar.css';
import logo from '../images/outbox.png';
const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><img className="logo" src={logo} alt="logo"/></li>
                <li>Send & Receive</li>
                <li>Shop</li>
                <li>Store</li>
                <li>Play</li>
                <li>Financial Services & More</li>
                <li>Business Solutions</li>
                <li>About Us</li>
            </ul>
        </div>
    )
}

export default Navbar;