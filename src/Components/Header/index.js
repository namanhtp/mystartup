import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";
function Header() {
    return (
        <div className="header" >   
            <div className="header__container">
                <a className='header__wrapper' href="#">
                    <img className='header_img' src='https://themes.3rdwavemedia.com/startup-kit/bs5/assets/images/logo.svg'></img>
                    <span className='header_name'>Startup Kit</span>

                </a>
                <ul className='header__list'>
                    <li className='header__list--item'>
                        <Link className='header__list--item--link'  to='/'>Home</Link>
                    </li>

                    <li className='header__list--item'>
                        <Link className='header__list--item--link' to='/feature'>Feature</Link>
                    </li>

                    <li className='header__list--item'>
                        <Link className='header__list--item--link' to='/stories'>Stories</Link>
                    </li>

                    <li className='header__list--item'>
                        <Link className='header__list--item--link' to='/pricing'>Pricing</Link>
                    </li>

                    <li className='header__list--item'>
                        <a className='header__list--item--link' href='#'>More <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                        <ul className='header__nav--list'>
                            <li className='header__nav--item'>
                                <a href='#'>About Us</a>
                            </li>

                            <li className='header__nav--item'>
                                <a href='#'>Customer Story Single</a>
                            </li>

                            <li className='header__nav--item'>
                                <a href='#'>Blog</a>
                            </li>

                            <li className='header__nav--item'>
                                <a href='#'>Blog Single</a>
                            </li>

                            <li className='header__nav--item'>
                                <a href='#'>Support Center</a>
                            </li>

                            <li className='header__nav--item'>
                                <a href='#'>Career</a>
                            </li>

                            <li className='header__nav--item'>
                                <a href='#'>Job Single</a>
                            </li>

                            <li className='header__nav--item'>
                                <a href='#'>Contact</a>
                            </li>
                        </ul>
                    </li>

                    <li className='header__list--item'>
                        <a className='header__list--item--link' href='#'>Log in</a>
                    </li>

                    <li className='header__list--item'>
                        <a className='header__list--item--link' href='#'>SIGN UP</a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
};

export default Header;