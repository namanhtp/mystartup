import React from 'react';
import "./style.css";
import Btn from '../../../Components/Btn'

function Hero() {
    return (
    <div className="hero">
        <div className='hero__container'>
            <img className='hero__img' src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/hero/hero-features.jpg'></img>
            <div className='hero__content'>
                <h2 className='hero__title'>Everything you need to kickstart your SaaS Business</h2>
                <p className='hero__description'>Startup Kit helps developers to build beautiful and user-friendly web apps quick and easily!</p>
                <div className='hero__actions'>
                    <Btn
                    title='Watch Out Demo'
                    style={{margin:'0',padding:'16px 25px'}}
                    />
                    <Btn
                    title='Plan & Pricing'
                    style={{margin:'0', backgroundColor:'transparent',borderColor:'#fff',padding:'16px 25px'}}
                    />
                </div>
            </div>
        </div>
        <div className='hero__overlay'></div>
    </div>
    );
}


export default Hero;
