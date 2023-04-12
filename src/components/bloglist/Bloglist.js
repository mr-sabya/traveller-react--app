import React from 'react';
import './Bloglist.css';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination'

export default function Bloglist() {
    return (
        <div>
            <div class="bg-area black margin-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="input-space">
                                <input class="search" type="text" placeholder="search...." />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div className="short-div">
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
            <div class="bg-area black pt-5 margin-bottom">
                <div class="container">
                    <div class="row margin-bottom">
                        <div class="col-lg-6">
                            <div class="blog-item">
                                <img src="images/Rectangle 33.png" alt="Rectangle 33.png" />
                                <div className="blog-text">
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
                    <div class="row top-border">
                        <div class="col-lg-12">
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
