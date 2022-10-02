import React from 'react';
import "./style.css";
function HeroPublic() {
    
    return (
        <div className='heroPublic'>
            <img src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/hero/hero-stories.jpg' className='heroPublic__img'></img>
            <div className='heroPublic__content'>
                <h2 className='heroPublic__title'>Thousands of smart businesses use <br/> Startup Kit</h2>
                <div className='heroPublic__actions'>
                    <a href='#' className='heroPublic__text'>Find out why</a>
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