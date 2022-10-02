import React from 'react';
import "./style.css";
import Item from '../Item'
import Btn from '../../../../../Components/Btn'

function StoriesContentItem(props) {
    

    const { id, title, desc, image, logo} = props.data
    return (
    <div className="storiesContentItem">
        <div className="storiesContentItem__top">
            <div className="storiesContentItem__top--img---wrapper">
                <img src={image} className='storiesContentItem__top--img'></img>
                <div className='storiesContentItem__top--mask'></div>
            </div>
            <div className='storiesContentItem__top--content'>
                <div className='storiesContentItem__top--content--wrapper'>
                    <img src={logo} className='storiesContentItem__top--logo'></img>
                    <h4 className='storiesContentItem__top--content---title'>{title}</h4>
                    <p className='storiesContentItem__top--content---description'>{desc}</p>
                <Btn
                title='Read Story'
                style={{backgroundColor:'transparent', border:'2px solid #fff', margin:'0'}}
                />
                </div>
            </div>

        </div>
        <div className="storiesContentItem__bot">
            {props.data.item.map(item =>{
                return (
                    <Item data={item}/>
                )
            })}
        </div>
    </div>
    );
}


export default StoriesContentItem;
