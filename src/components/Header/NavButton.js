import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavButton = ({ href, text }) => {

    const location = useLocation();

    let isHere = false;

    if (location.pathname === href) {
        isHere = true;
    } else {
        isHere = false;
    }

    return (
        <div>
            <li>
                {isHere &&
                    <Link to={href} className='active'>
                        <h6>{text}</h6>
                    </Link>
                }
                {!isHere &&
                    <Link to={href} className='inactive'>
                        <h6>{text}</h6>
                    </Link>
                }
            </li>

        </div>
    )
}

export default NavButton;