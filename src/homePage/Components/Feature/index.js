import React from 'react';
import "./main.css";
import FeatureList from './Component/'
import Btn from '../../../Components/Btn'
function Feature() {

    
    const listData = ['Feature one lorem ipsum dolor sit amet.','Feature one lorem ipsum dolor sit amet.','Feature one lorem ipsum dolor sit amet.','Feature one lorem ipsum dolor sit amet.','Feature one lorem ipsum dolor sit amet.','Feature one lorem ipsum dolor sit amet.','Feature one lorem ipsum dolor sit amet.']
    return (
        <div className="feature" >   
            <h2 className="feature__title">Key Features</h2>
            <div className='feature__container'>
                <div className='feature__container--left'>
                    <p className="feature__container--description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum magna augue, ac hendrerit massa placerat a. Sed id maximus tortor.</p>
                    <ul className='feature__container--list'>
                        {listData.map(item => {
                            return (
                                <FeatureList list={item}/>
                            )
                        })}
                        {/* <FeatureList
                            title='Feature one lorem ipsum dolor sit amet.'
                        />
                        <FeatureList
                            title='Feature one lorem ipsum dolor sit amet.'
                        />
                        <FeatureList
                            title='Feature one lorem ipsum dolor sit amet.'
                        />
                        <FeatureList
                            title='Feature one lorem ipsum dolor sit amet.'
                        />
                        <FeatureList
                            title='Feature one lorem ipsum dolor sit amet.'
                        />
                        <FeatureList
                            title='Feature one lorem ipsum dolor sit amet.'
                        />
                        <FeatureList
                            title='Feature one lorem ipsum dolor sit amet.'
                        /> */}
                    </ul>
                    <div className="feature__slider">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p className="feature__slider--description">A great way to Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <ul className='feature__slider--list'>
                            <li className='feature__slider--item'>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>

                            <li className='feature__slider--item'>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>

                            <li className='feature__slider--item'>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>

                            <li className='feature__slider--item'>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>

                            <li className='feature__slider--item'>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                        </ul>
                        <img className="feature__slider--img" src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/users/user-1.png'></img>
                        <span className='feature__slider--name'>Theresa Wood, Product Hunt</span>
                    </div>
                </div>
                <div className='feature__container--right'>
                    <img className="feature__container--image" src="https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/imac-screen.png"></img>
                </div>
            </div>
            <Btn
            title='View all features'
            style={{backgroundColor: '#159bc0',
                    border:'2px solid #159bc0' }}
            />

        </div>
    )
};

export default Feature;