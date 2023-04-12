import React from 'react';
import './Recent.css';
import { Link } from 'react-router-dom'

export default function Recent() {
    return (
        <div>
            <div className="bg-area black margin-top margin-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="recent-heading">
                                <h2>Recent Blog</h2>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6">
                                    <div className="item-image">
                                        <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                        <div className="recent-text">
                                            <Link to="">
                                                <p>The Journey of Sajek Valley Bangladesh</p>
                                            </Link>
                                            <div className="blog-link">
                                                <i className="fa fa-calendar"></i><span>April 14, 2018</span>
                                                <i className="fa fa-comment"></i><span>13</span>
                                                <i className="fa fa-heart"></i><span>3454</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item-image">
                                        <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                        <div className="recent-text">
                                            <Link to="">
                                                <p>The Journey of Sajek Valley Bangladesh</p>
                                            </Link>
                                            <div className="blog-link">
                                                <i className="fa fa-calendar"></i><span>April 14, 2018</span>
                                                <i className="fa fa-comment"></i><span>13</span>
                                                <i className="fa fa-heart"></i><span>3454</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item-image">
                                        <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                        <div className="recent-text">
                                            <Link to="">
                                                <p>The Journey of Sajek Valley Bangladesh</p>
                                            </Link>
                                            <div className="blog-link">
                                                <i className="fa fa-calendar"></i><span>April 14, 2018</span>
                                                <i className="fa fa-comment"></i><span>13</span>
                                                <i className="fa fa-heart"></i><span>3454</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item-image">
                                        <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                        <div className="recent-text">
                                            <Link to="">
                                                <p>The Journey of Sajek Valley Bangladesh</p>
                                            </Link>
                                            <div className="blog-link">
                                                <i className="fa fa-calendar"></i><span>April 14, 2018</span>
                                                <i className="fa fa-comment"></i><span>13</span>
                                                <i className="fa fa-heart"></i><span>3454</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="button-all">View More</button>
                        </div>
                        <div className="col-lg-5">
                            <div className="recent-heading">
                                <h2>Recent Video</h2>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12 recent-video">
                                    <Link to="">
                                        <div className="video-thumb">
                                            <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                            <div className="play">
                                                <img className="play-icon" src="images/play1.png" alt="Rectangle 33.png" />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="video-text">
                                        <p>The Journey of Sajek Valley Bangladesh</p>
                                        <div className="video-link">
                                            <i className="fa fa-calendar"></i><span>April 14, 2018</span>
                                            <i className="fa fa-comment"></i><span>13</span>
                                            <i className="fa fa-heart"></i><span>3454</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 recent-video">

                                    <Link to="">
                                        <div className="video-thumb">
                                            <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                            <div className="play">
                                                <img className="play-icon" src="images/play1.png" alt="Rectangle 33.png" />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="video-text">
                                        <p>The Journey of Sajek Valley Bangladesh</p>
                                        <div className="video-link">
                                            <i className="fa fa-calendar"></i><span>April 14, 2018</span>
                                            <i className="fa fa-comment"></i><span>13</span>
                                            <i className="fa fa-heart"></i><span>3454</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 recent-video">

                                    <Link to="">
                                        <div className="video-thumb">
                                            <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                            <div className="play">
                                                <img className="play-icon" src="images/play1.png" alt="Rectangle 33.png" />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="video-text">
                                        <p>The Journey of Sajek Valley Bangladesh</p>
                                        <div className="video-link">
                                            <i className="fa fa-calendar"></i><span>April 14, 2018</span>
                                            <i className="fa fa-comment"></i><span>13</span>
                                            <i className="fa fa-heart"></i><span>3454</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="button-all">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
