import React from 'react';
import './header.css';
import CTA from './CTA';
import Biodun from '../../assets/designs/biodun.jpg'
import SocialIcons from './SocialIcons';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hi, I am</h5>
                <h1>Abiodun Salami</h1>
                <h1>(TheTap)</h1>
                <h5 className='text-light'>Graphics Designer & Social Media Manager</h5>
                <CTA />
                <SocialIcons />

                <div className='me'>
                    <img src={Biodun} alt='me' />
                </div>

                <a href='#contact' className='scroll__down' ><AiOutlineArrowRight /></a>
            </div>
        </header>
    )
}

export default Header;