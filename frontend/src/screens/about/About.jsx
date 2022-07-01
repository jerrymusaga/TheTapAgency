import React from 'react' ;
import {FaAward} from 'react-icons/fa' ;
import {FiUser} from 'react-icons/fi' ;
import {VscFolderLibrary} from 'react-icons/vsc' ;
import Biodun from '../../assets/designs/biodun.jpg';
import './about.css' ;

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={Biodun} alt='about me' />
                    </div>
                </div>
                <div className='about__me-content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>5+ Years </small>
                        </article>
                        <article className='about__card'>
                            <FiUser className='about__icon' />
                            <h5>Clients</h5>
                            <small>100+ Worldwide </small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>20+ completed </small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam minus hic corporis aliquam itaque nam voluptatibus, accusamus harum quia exercitationem, quo ut quibusdam, iste nemo sapiente obcaecati voluptatum eveniet rerum.</p>
                    <a href='#contact' className='btn btn-primary'>Let's Communicate</a>
                </div>
            </div>
        </section>
    )
}

export default About;