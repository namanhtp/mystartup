import React from 'react';
import "./main.css";
import macbook from './Img/macbook-screen.png';
import iphone from './Img/iphone-screen.png';
import ipad from './Img/ipad-screen.png';
import Benefits from './Component/Benefits'
function Overview() {
    const datas = [
        {
            id: 1,
            image: 'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/icons/clock-white.svg',
        title: '10X Faster Development',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        },
        {
            id: 2,
            image: 'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/icons/presenter-white.svg',
        title: 'Increase Productivity',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        },
        {
            id: 3,
            image: 'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/icons/chat-white.svg',
        title: 'Better Collabration',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        }
    ]

    const linkLogo = ['https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/logos/logo-1.svg','https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/logos/logo-2.svg','https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/logos/logo-3.svg','https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/logos/logo-4.svg']
    return (
        <div class="overview" >
            <div class='overview__container'>
                <div class="overview__content">
                    <h2 class='overview__heading'>A great way to empower your team</h2>
                    <p class='overview__description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <div class='overview__img--wrapper'>
                    <img src={macbook} class='overview__img--macbook'></img>
                    <img src={ipad} class='overview__img--ipad'></img>
                    <img src={iphone} class='overview__img--iphone'></img>
                    <a class = 'overview__img--play---link' href='#'>
                        <img src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/play-icon-md.svg' class='overview__img--play'></img>
                    </a>
                </div>
            </div>
            <div class='overview__benefit--wrapper'>
                <div class='overview__benefit--container'>
                    {datas.map(item => {
                        return (
                            <Benefits data={item} />
                        )
                    })}
                </div>
            </div>

            <div class='overview__logo'>
                {
                    linkLogo.map( item => {
                        return (
                            <img class='overview__logo--item' src={item}></img>
                        )
                    })
                }
                {/* <img class='overview__logo--item' src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/logos/logo-1.svg'></img>
                <img class='overview__logo--item' src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/logos/logo-2.svg'></img>
                <img class='overview__logo--item' src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/logos/logo-3.svg'></img>
                <img class='overview__logo--item' src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/logos/logo-4.svg'></img> */}
            </div>
        </div>
    )
};

export default Overview;