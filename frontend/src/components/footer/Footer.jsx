import React from 'react';
import './footer.css';

import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <ul className='permanent-links'>
                <li><a href='/#'>Home</a></li>
                <li><a href='/#about'>About Me</a></li>
                <li><a href='/#experience'>Experience</a></li>
                <li><a href='/#services'>Services</a></li>
                <li><a href='/#portfolio'>Portfolio</a></li>
                <li><a href='/#contact'>Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href="https://instagram.com">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
                <a href="https://facebook.com">
                    <FaFacebook />
                </a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; The Tap Agency. All Rights Reserved {(new Date().getFullYear())}</small>
            </div>
        </footer>
    )
}

export default Footer;