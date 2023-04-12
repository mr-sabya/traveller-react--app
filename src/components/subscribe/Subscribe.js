import React from 'react';
import './Subscribe.css';

export default function Subscribe() {
    return (
        <div className="subscribe-bg bg-area">
            <div className="container">
                <div className="subscribe-card">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="subscribe-text">
                                <p>SUBSCRIBE FOR MORE BLOG</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subscribe-button">
                                <input className="subscribe" type="email" id="s_email" name="s_email" placeholder="Enter your mail" />
                                <button className="sub-button" type="button">subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
