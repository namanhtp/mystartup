import React from 'react';
import "./style.css";
function FeatureItem(props) {
    const {id, title, description_1, description_2, image, order} = props.data
    console.log(order)
    return (
    <div className="featureItem">
        <div className="featureItem__content">
            <h2 className="featureItem__content--title">{title}</h2>
            <p className="featureItem__content--description">{description_1}</p>
            <p className="featureItem__content--description">{description_2}</p>
        </div>
        <img style={{order: order}}  src={image} className="featureItem__content--img"></img>
    </div>
    );
}


export default FeatureItem;
