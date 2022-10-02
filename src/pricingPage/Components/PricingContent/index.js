import React from 'react';
import "./style.css";
import ItemTop from './Components/ItemTop'
import ItemBot from './Components/ItemBot'

function PricingContent() {
    const datas = [
        {
            id:1,
            title:'Starter',
            description:'For basic use lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            price:'5',
            listItem:[
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
            ]
        },

        {
            id:2,
            title:'Pro',
            description:'For pro use lorem ipsum dolor sit amet, consectetuer adipiscing elit. elit.',
            price:'10',
            listItem:[
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
            ]

        },

        {
            id:3,
            title:'Team',
            description:'For team use lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            price:' 25',
            listItem:[
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
            ]
        },

        {
            id:4,
            title:'Enterprise',
            description:'For team use lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            price:'299',
            listItem:[
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
                {
                    id:1,
                    content:' 1 User'
                },
            ]
        },
    ]
    return (
    <div className="pricingContent">
        <div className='pricingContent__container'>
            <h3 className='pricingContent__title'>30 day FREE trial with all plans!</h3>
            <div className='pricingContent__item--wrapper'>
                {datas.map(item => {
                    return (
                        <div className='pricingContent__item--content'>
                        <ItemTop data={item}/>
                        <ItemBot data ={item}/>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
    );
}


export default PricingContent;
