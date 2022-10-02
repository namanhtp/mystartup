import React from 'react';
import "./main.css";
import Btn from '../../../Components/Btn'

// import Slide from '../Slider/Component/slide.js'


function Support() {
    return (
        <div className="support" >
            <div className="support__container">
                <h2 className="support__title">24/7 Customer Support</h2>
                <p className="support__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
                <Btn
                style={{backgroundColor:'#159bc0',
                        border:'2px solid #159bc0'}}
                title='Our Support Center'
                />
                <div className='support__img--wrapper'>
                    <img className="support__img" src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/team.png'></img>
                </div>
            </div>
        </div>
    )
};

export default Support;