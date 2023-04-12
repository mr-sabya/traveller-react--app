import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="container">
            <div className="navbar">
                <div className="nav">
                    <div className="navbar-logo">
                        <Link to="#">
                            <img src="images/logo.png" alt="logo.png" />
                        </Link>
                    </div>
                    <div className="navbar-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#">Portfolio</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/video">Video</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="login">
                        <ul>
                            <li><Link to="#">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
