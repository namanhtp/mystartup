import React from 'react';
import "./style.css";
import Header from '../Components/Header';
import Slider from './Components/Slider/';
import Overview from './Components/Overview/';
import Feature from './Components/Feature/';
import Businesses from './Components/Businesses/';
import Customers from './Components/Customers/';
import Support from './Components/Support/';
import Download from './Components/Download/';
import Footer from '../Components/Footer/';

function HomePage() {
    return (
    <div className="homepage">
        <Header/>
        <Slider/>
        <Overview/>
        <Feature/>
        <Businesses/>
        <Customers/>
        <Support/>
        <Download/>
        <Footer/>
    </div>
    );
}


export default HomePage;
