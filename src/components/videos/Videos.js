import React from 'react';
import './Videos.css';
import { Link } from 'react-router-dom';

export default function Videos() {
    return (
        <div>
            <div class="bg-area black margin-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="vlog-search">
                                <input class="search" type="text" placeholder="search...." />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div className="vlog-short">
                                <div className="short-text">
                                    <p>Short By</p>
                                </div>
                                <div class="area">
                                    <form>
                                        <select className="short" id="short" name="short">
                                            <option>All Articles</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-area black margin-bottom pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 item-video">
                            <div className="video-thumb">
                                <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                <Link to="">
                                    <div className="play">
                                        <img className="play-icon" src="images/play1.png" alt="Rectangle 33.png" />
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
                        <div class="col-lg-6 item-video">
                            <div className="video-thumb">
                                <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                <Link to="">
                                    <div className="play">
                                        <img className="play-icon" src="images/play1.png" alt="Rectangle 33.png" />
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
                        <div class="col-lg-6 item-video">
                            <div className="video-thumb">
                                <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                <Link to="">
                                    <div className="play">
                                        <img className="play-icon" src="images/play1.png" alt="Rectangle 33.png" />
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
                        <div class="col-lg-6 item-video">
                            <div className="video-thumb">
                                <img className="thumb" src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                <Link to="">
                                    <div className="play">
                                        <img className="play-icon" src="images/play1.png" alt="Rectangle 33.png" />
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

                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="b-item">
                                <div class="button">
                                    <button class="back" type="button" onclick="">back</button>
                                </div>
                                <div class="button">
                                    <button class="next" type="button" onclick="">next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
