//import { useState, useEffect } from 'react'
import '../styles/home.css'
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Service } from '../components/services';
import { Specialities } from '../components/specialities';
import { Contact } from '../components/contact';
import { whatsapp } from '../elements/whatsapp';
import { Album } from '../components/album';
import { phone } from '../elements/contact';

export function Home () {

    const message = 'Bonjour, je suis interesse par vos services.'

    return (
        <div className='home-container'>
            <div id='hero' className='hero'><Hero /></div>
            <div id='about'>
                <About />
            </div>
            <div id='services'>
                <Service />
            </div>
            <div id='album'>
                <Album />
            </div>
            <div id='specialities'>
                <Specialities />
            </div>
            <div id='contact'>
                <Contact />
            </div>
            <div id='whatsApp'>
                <a className='float'
                   href={whatsapp(Number(phone), message)}
                   target='_blank'
                   rel='noopener noreferrer'>
                    WhatsApp
                </a>
            </div>
        </div>
    )
}

