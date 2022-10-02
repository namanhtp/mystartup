import React from 'react';
import "./main.css";
function Benefits(props) {
    // console.log('props =====', props)
    // {
    //     data: {
    //         image: '',
    //         title: '',
    //         de
    //     }
    // }

    const { id, image, title, description } = props.data
    return (
        <div key={id} className="benefits" >
            <img src={image} className='benefits__icon'></img>
            <h3 className="benefits__heading">{title}</h3>
            <p className="benefits__description">{description}</p>
        </div>
    )
};

export default Benefits;