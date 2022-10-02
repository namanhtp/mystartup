import React from 'react';
import "./style.css";


function ListItem(props) {
    const {content} = props.data;
    return (
        <>
            <li className='pricingContent__item--list---item'>
                <i class="fa fa-check" aria-hidden="true"></i>
                <span>{content}</span>
            </li>
        </>
    );
}


export default ListItem;
