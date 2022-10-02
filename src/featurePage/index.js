import React from 'react';
import "./style.css";
import Header from '../Components/Header';
import Footer from '../Components/Footer/';
import Hero from './Components/Hero/';
import FeatureContent from './Components/FeatureContent'

function FeaturePage() {
    return (
    <div className="featurePage">
        <Header/>
        <Hero/>
        <FeatureContent/>
        <Footer/>
    </div>
    );
}


export default FeaturePage;
