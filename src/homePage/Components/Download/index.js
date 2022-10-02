import React from 'react';
import "./main.css";
import DownloadItem from '../Download/Component/DownloadItem/';

// import Slide from '../Slider/Component/slide.js'


function Download() {
    const datas = [
        {   id: 1,
            classItem: 'fa fa-apple',
            downloadTitle:'Download on the',
            downloadName:'App Store'
        },
        {   
            id: 2,
            classItem: 'fa fa-android',
            downloadTitle:'Download on the',
            downloadName:'App Store'
        },
        {   
            id: 3,
            classItem: 'fa fa-windows',
            downloadTitle:'Download on the',
            downloadName:'App Store'
        }
    ]
    return (
        <div className="download" >
            <h2 className="download__title">Download Our Apps</h2>
            <ul className='download__list'>
                {datas.map(item => {
                    return (
                        <DownloadItem key={item.id} data={item}/>
                    )
                })}
                {/* <DownloadItem
                classItem='fa fa-apple'
                downloadTitle='Download on the'
                downloadName='App Store'
                />
                <DownloadItem
                classItem='fa fa-android'
                downloadTitle='Get it on'
                downloadName='Google Play'

                />
                <DownloadItem
                classItem='fa fa-windows'
                downloadTitle='Download from'
                downloadName='Windows Phone Store'

                /> */}
            </ul>
        </div>
    )
};

export default Download;