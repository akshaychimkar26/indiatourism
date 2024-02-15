import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [token, setToken] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
    }, []);

    const handleHomeClick = () => {
        navigate('/');
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <nav className='nav'>
                {/* Hamburger icon for smaller screens */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {/* List items */}
                <ul className={`ul ${showMenu ? "show" : ""}`}>
                    <li onClick={handleHomeClick}>HOME</li>
                    <hr className='hrn' />
                    <li><Link style={{ textDecoration: "none", color: "white" }} to='/india-tourism'>INDIA TOURISM</Link></li>
                    <hr className='hrn' />
                    {token ? (
                        <>
                            <li><Link style={{ textDecoration: "none", color: "white" }} to='/india-tours'>TOUR PACKAGES</Link></li>
                        </>
                    ) : (
                        <li onClick={() => alert("Please log in first.")}>TOUR PACKAGES</li>
                    )}
                    <hr className='hrn' />
                    <li><Link style={{ textDecoration: "none", color: "white" }} to='/places-to-visit'>PLACES TO VISIT</Link></li>
                    <hr className='hrn' />
                    {token ? (
                        <>
                            <li><Link style={{ textDecoration: "none", color: "white" }} to='/offers'>TOUR OFFERS</Link></li>
                        </>
                    ) : (
                        <li onClick={() => alert("Please log in first.")}>TOUR OFFERS</li>
                    )}
                    <hr className='hrn' />
                    <li><Link style={{ textDecoration: "none", color: "white" }} to='/contact-us'>CONTACT US</Link></li>
                    <hr className='hrn' />
                </ul>
            </nav>
            <div><img className='logo3' src='https://www.theindiatourism.com/images/callBack.webp' /></div>
        </div>
    );
}

export default Navbar;
