import React from 'react';
import "./style.css";
import StoriesContentItem from './Components/StoriesContentItem'


function StoriesContent() {
    const datas =[
        {
            id:1,
            image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/story-1.jpg',
            logo:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/client-logo-1.svg',
            title:'A new way to app dev',
            desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus...',
            item: [
                {
                    id:1,
                    avatar:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/profiles/profile-1.png',
                    descr:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis...',
                    name:'Kevin Harrison',
                    job:'Lead Developer, Agency Lorem'
                },
                {
                    id:2,
                    avatar:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/profiles/profile-2.png',
                    descr:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis...',
                    name:'Doris Reyes',
                    job:'Lead Developer, Agency Ipsum'
                }
            ]
        },

        {
            id:2,
            image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/story-2.jpg',
            logo:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/client-logo-2.svg',
            title:'Shipping product',
            desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus...',
            item: [
                {
                    id:3,
                    avatar:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/profiles/profile-3.png',
                    descr:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis...',
                    name:'Robert Jensen',
                    job:'UX Designer, Startup Lorem'
                },
                {
                    id:4,
                    avatar:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/profiles/profile-4.png',
                    descr:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis...',
                    name:'Carl McCoy',
                    job:'Developer, Startup Ipsum'
                },
            ]
        },

        {
            id:3,
            image:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/story-3.jpg',
            logo:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/client-logo-3.svg',
            title:'Lorem Ipsum Dolor',
            desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus...',
            item: [
                {
                    id:5,
                    avatar:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/profiles/profile-4.png',
                    descr:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis...',
                    name:'Arthur Williamson',
                    job:'Account Manager, Corporate Lorem'
                },
                {
                    id:6,
                    avatar:'https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/stories/profiles/profile-6.png',
                    descr:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis...',
                    name:'Emma Black',
                    job:'Product Manager, Corporate Ipsum'
                },
            ]
        },
    ]
    return (
    <div className="storiesContent">
        {datas.map(item => {
            return (
                <StoriesContentItem data={item} />
            )
        })}
    </div>
    );
}


export default StoriesContent;
