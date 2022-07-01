import React from 'react';
import {BsLinkedin} from 'react-icons/bs' ;
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa' ;

const SocialIcons = () => {
    return (
        <div className='social__icons'>
            <a href="https://instagram.com" rel="noreferrer" target='_blank'><FaInstagram /></a>
            <a href="https://facebook.com" rel="noreferrer" target='_blank'><FaFacebook /></a>
            <a href="https://whatsapp.com" rel="noreferrer" target='_blank'><FaWhatsapp /></a>
            <a href="https://linkedin.com" rel="noreferrer" target='_blank'><BsLinkedin /></a>
        </div>
    )
}

export default SocialIcons;