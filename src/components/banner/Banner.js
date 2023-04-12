import React from 'react';
import './Banner.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Banner() {
    return (
        <div className="bg-area">
            <div className="bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner">
                                <img src="images/Group 16.png" alt="Group 16.png" />
                            </div>
                            <div className="banner-btn">
                                <Router>
                                    <Link to="#">Let’s Travel</Link>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
