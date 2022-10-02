import React from 'react';
import "./main.css";

// import Slide from '../Slider/Component/slide.js'


function DownloadItem(props) {
    const{classItem, downloadTitle, downloadName} = props.data
    return (
        <>
            <li className="download__item">
                <a className='download__link' href='#'>
                    <i class={classItem} aria-hidden="true"></i>
                    <div className="download__link--wrapper">
                        <span className="download__link--text">{downloadTitle}</span>
                        <span className="download__link--text">{downloadName}</span>
                    </div>
                </a>
            </li>
        </>
    )
};

export default DownloadItem;