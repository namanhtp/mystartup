import React from 'react';
import "./main.css";
import slider_1 from './img/slider_1.jpg'
import Btn from '../../../Components/Btn'

// import Slide from '../Slider/Component/slide.js'


function Header() {
    return (
        <div className="slider" >
            <div className="slider__container">
                <img className="slider__img" src={slider_1}></img>
                <div className='slider__content'>
                    <h2 className='slider__title'>The Perfect Design Framework for Startup Businesses</h2>
                    <p className='slider__description'>Good design is good business, try our demo today!</p>
                    <div className='slider__action'>
                        <Btn
                        style={{margin:'0'}}
                        title='Start Free Trial'
                        />
                        <a className='slider__action--play' href='#'> <img className='slider__action--img' src ='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/play-icon.svg'></img> See how it works</a>
                    </div>
                </div>
            </div>
            <div className='slider__overlay'></div>
        </div>
    )
};

export default Header;