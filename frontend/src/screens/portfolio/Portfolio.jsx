import React from 'react';
import './portfolio.css';

import YAM from '../../assets/designs/YAM.jpg';
import strive from '../../assets/designs/strive.jpg';
import MUS from '../../assets/designs/MUS.jpg';
import MIT from '../../assets/designs/MIT.jpg';
import JCB from '../../assets/designs/JCB.jpg';
import HINO from '../../assets/designs/HINO.jpg';
import JB from '../../assets/designs/jb.jpg';
import FARHERS from '../../assets/designs/Farhers.jpg';
import COLONY from '../../assets/designs/colony.jpg';
import COLO from '../../assets/designs/COLO.jpg';
import CICA from '../../assets/designs/CICA.jpg';
import MOCKUP from '../../assets/designs/02-Square-Gatefold-Brochure-Mockup-Preview-Recovered.jpg';
import FLYER from '../../assets/designs/Flyer_Mockup.jpg';

const designs = [
    {
        id: 1,
        title: 'title1',
        image: YAM, 
    },
    {
        id: 2,
        title: 'title2',
        image: strive, 
    },
    {
        id: 3,
        title: 'title3',
        image: MUS, 
    },
    {
        id: 4,
        title: 'title4',
        image: MIT, 
    },
    {
        id: 5,
        title: 'title5',
        image: JCB, 
    },
    {
        id: 6,
        title: 'title6',
        image: JB, 
    },
    {
        id: 7,
        title: 'title7',
        image: FARHERS, 
    },
    {
        id: 8,
        title: 'title8',
        image: COLONY, 
    },
    {
        id: 9,
        title: 'title9',
        image: COLO, 
    },
    {
        id: 10,
        title: 'title10',
        image: CICA, 
    },
    {
        id: 11,
        title: 'title11',
        image: MOCKUP, 
    },
    {
        id: 12,
        title: 'title12',
        image: FLYER, 
    },
    
    
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
            {
               designs.map(({id,title,image}) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <a href='' className='btn'>Check Project</a>
                        </article>
                    )
               })
            }
            </div>
            
        </section>
    )
}

export default Portfolio;