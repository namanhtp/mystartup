import React from 'react';
import "./style.css";
import Header from '../Components/Header';
import Footer from '../Components/Footer/';
import HeroPublic from '../Components/HeroPublic'
import StoriesContent from './Components/StoriesContent'

function StoriesPage() {
    return (
    <div className="storiesPage">
        <Header/>
        <HeroPublic/>
        <StoriesContent/>
        <Footer/>
    </div>
    );
}


export default StoriesPage;
