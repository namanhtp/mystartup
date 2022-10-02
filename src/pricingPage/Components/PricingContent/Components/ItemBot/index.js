import React from 'react';
import "./style.css";
import ListItem from "../ListItem"


function ItemBot(props) {
    return (
        <div className='pricingContent__item--content--bottom'>
                        <ul className='pricingContent__item--list'>
                            {props.data.listItem.map(item => {
                                return (
                                    <ListItem data={item}/>
                                )
                            })}
                        </ul>
                    </div>
    );
}


export default ItemBot;
