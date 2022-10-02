import React from 'react';
import "./style.css";

function Item(props) {
    const {id, avatar, descr, name, job} = props.data
    return (
    <div className="item">
        <img src={avatar} className="item__avatar"></img>
        <i class="fa fa-quote-left" aria-hidden="true"></i>
        <p className="item__description">{descr}</p>
        <span className="item__name">{name}</span>
        <span className="item__job">{job}</span>
    </div>
    );
}


export default Item;
