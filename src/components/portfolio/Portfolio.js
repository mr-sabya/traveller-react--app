import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <div className="bg-area portfolio-bg background margin-top margin-bottom">
            <div className="container">
                <div className="portfolio-heading">
                    <h2>PORTFOLIO</h2>
                </div>
                <div className="portfolio mt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="portfolio-item">
                                <div className="port-image">
                                    <img src="images/Rectangle 8.png" alt="Rectangle 8.png" />
                                    <div className="portfolio-button">
                                        <button className="button-hover">Show More</button>
                                    </div>
                                </div>
                                <p>GRAPHIC DESIGN</p>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-item">
                                <div className="port-image">
                                    <img src="images/Rectangle-2 8.png" alt="Rectangle-2 8.png" />
                                    <div className="portfolio-button">
                                        <button className="button-hover">Show More</button>
                                    </div>
                                </div>
                                <p>PHOTOGRAPHY</p>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-item">
                                <div className="port-image">
                                    <img src="images/Rectangle-3 8.png" alt="Rectangle-3 8.png" />
                                    <div className="portfolio-button">
                                        <button className="button-hover">Show More</button>
                                    </div>
                                </div>
                                <p>VIDEOGRAPHY</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
