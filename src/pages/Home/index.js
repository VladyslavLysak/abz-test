import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

import Persons from '../../components/Persons';
import Registration from '../../components/Registration';

import man from '../../assets/man-laptop-v1.svg';

const Home = () => {

    return (
        <div className='home-container'>
            <div className='test-container'>
                <div className='test-text-container'>
                    <h1>Test assignment for frontend developer position</h1>
                    <p>
                        We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. <span className='visible'>Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens</span>
                    </p>
                    <LinkScroll
                        to='registration'
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={2000}
                        delay={200}
                    >
                        <button
                            className='button'
                        >
                            Sing up now
                    </button>
                    </LinkScroll>
                </div>
            </div>
            <div className='acquainted-container'>
                <div className='acquainted-text-image-container'>
                    <h1 className='center'>Let's get acquainted</h1>
                    <div className='flex-row'>
                        <div className='col-md-5'>
                            <img src={man} alt='A man with laptop' className='man-image' />
                        </div>
                        <div className='col-md-7'>
                            <h4>I am cool frontend developer</h4>
                            <ul>
                                <li>
                                    <p>
                                        We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.
                                </p>
                                </li>
                                <li>
                                    <p>
                                        If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.
                                </p>
                                </li>
                                <li>
                                    <LinkScroll
                                        to='registration'
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        duration={2000}
                                        delay={200}
                                    >
                                        <h6>Sign up now</h6>
                                    </LinkScroll>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Persons />
                <Registration />
            </div>
        </div>
    )
}

export default Home;