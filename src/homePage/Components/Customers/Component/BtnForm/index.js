import React from 'react';
import "./main.css";
function BtnForm(props) {
    return (
        <>
            <a style={props.style} href='#' className='btnform'>
                <i class={props.className} aria-hidden="true"></i>
                <span>{props.title}</span>
            </a>
        </>
    )
};

export default BtnForm;