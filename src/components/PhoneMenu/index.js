import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';

import NavButton from '../Header/NavButton';

import logo from '../../assets/logo.svg';

const PhoneMenu = () => {

    const [showMenu, setShowMenu] = useState(false);

    const menuChangeHandler = () => {
        setShowMenu(!showMenu)
    };

    const renderMenuMask = () => {
        return (
            <div
                className='menu-mask-container'
                onClick={() => setShowMenu(false)}
            >

            </div>
        )
    }

    const renderMenu = () => {
        return (
            <div>
                {showMenu &&
                    <div>
                        <div className='rendered-menu shadow'>
                            <span>
                                <a href='/'>
                                    <img src={logo} alt='logo' />
                                </a>
                            </span>
                            <ul>
                                <NavButton href='/about' text='About me' />
                                <NavButton href='/relationships' text='Relationships' />
                                <NavButton href='/users' text='Users' />
                                <NavButton href='/signup' text='Sign up' />
                                <NavButton href='/terms' text='Terms and Conditions' />
                            </ul>
                            <ul>
                                <NavButton href='/works' text='How it works' />
                                <NavButton href='/partnership' text='Partnership' />
                                <NavButton href='/help' text='Help' />
                                <NavButton href='/testimonial' text='Leave testimonial' />
                                <NavButton href='/contact' text='Contact us' />
                            </ul>
                            <ul>
                                <NavButton href='/articles' text='Articles' />
                                <NavButton href='/news' text='Our news' />
                                <NavButton href='/testimonials' text='Testimonials' />
                                <NavButton href='/licenses' text='Licenses' />
                                <NavButton href='/privact' text='Privacy Policy' />
                            </ul>
                        </div>
                        {renderMenuMask()}
                    </div>
                }
            </div>
        )
    }

    return (
        <div className='mobile'>
            <span>
                <FaBars
                    onClick={menuChangeHandler}
                    className='phone-menu-logo'
                />
            </span>
            {renderMenu()}
        </div>
    )
}

export default PhoneMenu;