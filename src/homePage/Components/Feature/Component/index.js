import React from 'react';
import "./main.css";
function FeatureList(props) {
    return (
        <>
            <li className='feature__container--item'>
                <img className='feature__container--item---icon' src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/tick.svg'></img>
                <span>{props.list}</span>
            </li>
        </>
    )
};

export default FeatureList;