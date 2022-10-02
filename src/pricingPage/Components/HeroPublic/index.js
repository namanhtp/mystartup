import React from 'react';
import "./style.css";
function HeroPublic() {
    
    return (
        <div className='heroPublic'>
            <img src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/hero/hero-pricing.jpg' className='heroPublic__img'></img>
            <div className='heroPublic__content'>
                <h2 className='heroPublic__title'>Our Pricing is Simple and Flexible</h2>
                <p className='heroPublic__desc'>You can change your plan at any time.</p>
                <div className='heroPublic__actions'>
                    <a href='#' className='heroPublic__text'>View Plans</a>
                    <a href='#' className='heroPublic__span--icon'>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div className='heroPublic__overlay'></div>
        </div>
    )
};

export default HeroPublic;