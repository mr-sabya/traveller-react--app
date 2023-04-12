import React from 'react';
import './Home.css';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Portfolio from '../../components/portfolio/Portfolio';
import Recent from '../../components/recent/Recent';

export default function Home() {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <Recent></Recent>
            
        </div>
    )
}
