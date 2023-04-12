import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <div className="footer-bg bg-area margin-top margin-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-item">
                            <div className="logo">
                                <img src="images/logo-2.png" alt="logo-2.png" />
                                <div className="social">
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-pinterest"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-item">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="#">About me</Link></li>
                                <li><Link to="#">Blog Post</Link></li>
                                <li><Link to="#">Portfolio</Link></li>
                                <li><Link to="#">Tour Vlog</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-item">
                            <h4>Address</h4>
                            <ul>
                                <li><p>123, Street Road, Xyz,</p></li>
                                <li><p>BANGLADESH</p></li>
                                <li><Link to="#">yxz_yourname@gmail.com</Link></li>
                                <li><Link to="#">+00-18467-84748</Link></li>
                                <li><Link to="#">+00-74957-834749</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-item">
                            <h4>Contact</h4>
                            <div className="form-group">
                                <input type="email" id="fname" name="fname" placeholder="Enter your mail" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message" placeholder="Your Message.."></textarea>
                            </div>
                            <button className="send" type="button">Send</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-area black border-copyright">
                <div className="container">
                    <div className="copyright">
                        <p>Copyright © 2021 all reserved to XYZ.inc</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
