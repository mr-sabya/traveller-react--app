import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="bg-area black margin-top margin-bottom">
            <div className="container said-icon">
                <div className="row ">
                    <div className="col-lg-6">
                        <img className="about-image" src="images/my photo.png" alt="myphoto" />
                    </div>
                    <div className="col-lg-6 text-area">
                        <div className="about-text">
                            <div className="topbox-1"></div>
                            <div className="topbox-2"></div>
                            <div className="text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                            </div>
                        </div>
                        <img src="images/fxcghgch 1.png" alt="fxcghgch 1.png" />
                    </div>
                </div>
                <img className="slaid-bar" src="images/810-[Converted] 2.png" alt="810-[Converted]" />
            </div>
        </div>
    )
}
