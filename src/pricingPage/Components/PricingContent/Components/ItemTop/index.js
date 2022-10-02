import React from 'react';
import "./style.css";
import Btn from '../../../../../Components/Btn'


function ItemTop(props) {
    const {title, description, price} = props.data
    return (
        <div className='pricingContent__item--content--top'>
            <h3 className='pricingContent__item--title'>{title}</h3>
            <p className='pricingContent__item--description'>{description}</p>
            <span className='pricingContent__item--price---icon'>$</span>
            <span className='pricingContent__item--price---text'>{price}</span>
            <span className='pricingContent__item--price---description'>Per month</span>
            <Btn
            title='Sign Up Now'
            style={{backgroundColor:'transparent',border:'2px solid #fff'}}
            />
        <p className='pricingContent__item--details'>(30 day free trial)</p>
    </div>
    );
}


export default ItemTop;
