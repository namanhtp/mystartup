import React from 'react';
import "./main.css";
function Btn(props) {
    
    return (
        <>
            <a style={props.style} className='btn' href='#'>{props.title}</a>
        </>
    )
};

export default Btn;