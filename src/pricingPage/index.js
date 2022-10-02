import React from 'react';
import "./style.css";
import Header from '../Components/Header';
import Footer from '../Components/Footer/';
import HeroPublic from './Components/HeroPublic'
import PricingContent from './Components/PricingContent'

function PricingPage() {
    return (
    <div className="pricingPage">
        <Header/>
        <HeroPublic/>
        <PricingContent/>
        <Footer/>
    </div>
    );
}


export default PricingPage;
