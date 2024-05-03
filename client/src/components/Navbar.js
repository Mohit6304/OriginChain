import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';
import logob from '../assets/logob.png'; // Import your logo image here

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: 'Register', link: '/roles' },
        { name: 'Place Order', link: '/addproducts' }, // Updated link to "Add Products"
        { name: 'Manage Supply Chain', link: '/supply' },
        { name: 'Track Food Items', link: '/track' },
        { name: 'QR-Code', link: '/qrcode' }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                {/* Brand Logo (Navbar Brand) */}
                <Link to="/" className="navbar-brand">
                    <img src={logob} alt="Logo" style={{ maxWidth: '100px', maxHeight: '40px' }} /> {/* Adjust width and height as needed */}
                    OriginChain
                </Link>

                {/* Hamburger Menu (Toggler Button) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <IoMenu />}
                </button>

                {/* Navbar Links (Collapse Section) */}
                <div className={`collapse navbar-collapse ${open ? 'show' : ''} `}>
                    <ul className="navbar-nav ml-auto">
                        {links.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <Link
                                    to={link.link}
                                    className="nav-link"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;