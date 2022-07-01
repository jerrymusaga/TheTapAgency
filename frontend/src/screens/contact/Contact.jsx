import React from 'react';
import './contact.css';

import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp, BsLinkedin} from 'react-icons/bs';

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contain__option-icon'/>
                        <h4>Email</h4>
                        <h5>thetapagency.ng@gmail.com</h5>
                        <a href="mailto:thetapagency.ng@gmail.com" rel="noreferrer" target='_blank'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contain__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+2348127462253</h5>
                        <a href="https://wa.me/+2348127462253?text=I'm%20interested%20in%20your%20service" rel="noreferrer" target='_blank'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsLinkedin className='contain__option-icon'/>
                        <h4>LinkedIn</h4>
                        <h5>TheTapAgency</h5>
                        <a href="https://linkedin.com" rel="noreferrer" target='_blank'>Send a Message</a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact;