import React from 'react';
import "./main.css";
import BusinessesItem from './Component/'
import Btn from '../../../Components/Btn'
function Businesses() {
const datas =[
    {   
        id:1,
        image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/customers/customer-1.jpg',
        title:'Shipping product',
        titleBr:'at an amazing speed',
        details:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus.'
    },

    {   
        id:2,
        image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/customers/customer-2.jpg',
        title:'Better collaboration',
        titleBr:'with remote teams',
        details:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus.'
    },

    {   
        id:3,
        image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/customers/customer-3.jpg',
        title:'Put UX at the heart of',
        titleBr:'our SaaS businessd',
        details:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus.'
    },

    {   
        id:4,
        image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/customers/customer-4.jpg',
        title:'A new way to app',
        titleBr:'development',
        details:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus.'
    }
]

    return (
        <div className="businesses" >
            <div className="businesses__container">
                <h2 className='businesses__title'>Trusted by smart businesses</h2>
                <p className='businesses__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum felis at lacus blandit egestas. Donec consectetur mollis leo, et pharetra massa eleifend mollis.</p>
                <div className="businesses__wrapper">
                    {datas.map(item => {
                        return (
                            <BusinessesItem data={item}/>
                        )
                    })}
                    {/* <BusinessesItem
                    image='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/customers/customer-1.jpg'
                    />
                    <BusinessesItem
                    image='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/customers/customer-2.jpg'
                    />
                    <BusinessesItem
                    image='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/customers/customer-3.jpg'
                    />
                    <BusinessesItem
                    image='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/customers/customer-4.jpg'
                    /> */}
                </div>
                <Btn
                    title='All Customer Stories'
                    style={{backgroundColor: '#159bc0',
                            border:'2px solid #159bc0' }}
                />
            </div>
        </div>
    )
};

export default Businesses;