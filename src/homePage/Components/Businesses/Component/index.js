import React from 'react';
import "./main.css";
function BusinessesItem(props) {
    const {image, title, details,titleBr} =props.data
    console.log(props.data);
    return (
        <div className="business__item">
            <img src={image} className="business__item--img"></img>
            <div className="business__overlay"></div>
            <div className="business__content">
                <h3 className="business__title">{title} <br/>{titleBr}</h3>
                <div className="business__desc">
                    <span className="business__span">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p className="business__details">{details}</p>
                </div>
            </div>
            <a  className="business__link" href='#'></a>
        </div>
    )
};

export default BusinessesItem;