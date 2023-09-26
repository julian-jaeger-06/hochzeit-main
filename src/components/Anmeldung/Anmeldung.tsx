import React, { useState } from 'react';
import './anmeldung.css'
import ContactForm from './ContactForm';


export default function Anmeldung() {
    return(
        <section className='AnmeldungSection'>
                <h2>
                    Seid ihr dabei?
                </h2>
                <h3 className='subline'> 
                    Bitte bis spätestens zum 01.04.2024 ausfüllen und absenden
                </h3>
                <ContactForm/>
        </section>
    );
}
    



