import React from 'react';
import NavButton from './NavButton';

import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <div className='header-container'>
            <ul>
                <a href='/'>
                    <img src={logo} alt='logo' />
                </a>
            </ul>
            <ul className='visible tablet-visible'>
                <NavButton href='/about' text='About me'/>
                <NavButton href='/relationships' text='Relationships' />
                <NavButton href='/requirements' text='Requirements' />
                <NavButton href='/users' text='Users' />
                <NavButton href='/signup' text='Sign up' />
            </ul>
        </div>
    )
}

export default Header;