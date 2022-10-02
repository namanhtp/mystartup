import React from 'react';
import "./style.css";
import FeatureItem from './Components/FeatureItem'
function FeatureContent() {
    const datas =[
        {
            id:1,
            title:'Feature One Heading',
            description_1:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            description_2:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, Screenshot: Appify Bootstrap 4 Admin Theme consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
            image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/features/feature-1.jpg',
            order:'1'
        },
        {
            id:2,
            title:'Feature Two Heading',
            description_1:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            description_2:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, Screenshot: Appify Bootstrap 4 Admin Theme consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
            image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/features/feature-2.jpg',
            order:'-1'
        },
        {
            id:3,
            title:'Feature Three  Heading',
            description_1:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            description_2:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, Screenshot: Appify Bootstrap 4 Admin Theme consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
            image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/features/feature-3.jpg',
            order:'1'
        },
        {
            id:4,
            title:'Feature Four Heading',
            description_1:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            description_2:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, Screenshot: Appify Bootstrap 4 Admin Theme consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
            image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/features/feature-4.jpg',
            order:'-1'
        },
    ]
    return (
    <div className="featureContent">
        {datas.map(item =>{
            return (
                <FeatureItem  data={item}/>
            )
        })}
        {/* <FeatureItem/>
        <FeatureItem/>
        <FeatureItem/>
        <FeatureItem/> */}
    </div>
    );
}


export default FeatureContent;
