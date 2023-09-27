'use client'

import React, { use, useState } from 'react';
import Switch from './Switch/Switch';
import './contactForm.css'

const ContactForm: React.FC = () => {
    // Define state variables for form fields
    const [toggleValue, setToggleValue] = useState<boolean>(true);
    const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [textInput, setTextInput] = useState<string>('');
  
    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Add your form submission logic here
    };
  
    return (
      <form className="ContactForm" onSubmit={handleSubmit}>
        <div>
          {/* Toggle button */}
          {/* <div className='Toggle'>
            <label> Ja
              <input 
                type="radio"
                value="yes"
                checked={toggleValue}
                onChange={() => setToggleValue(true)}
              />
          
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={!toggleValue}
                onChange={() => setToggleValue(false)}
              />
              Leider nein
            </label>
          </div> */}

          <div>
            <Switch/>
          </div>
    
          {/* Checkbox */}
          <div className='Checkbox'>
            <label>
              <input
                type="checkbox"
                checked={checkBoxValue}
                onChange={() => setCheckBoxValue(!checkBoxValue)}
              />
              Ich komme schon Freitags
            </label>
          </div>         
        </div>  

        <div className='eMail'>
          {/* Email input */}
          <div className='FormGroup'>
            <label>Email: </label>
            <input className='InputText'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className='GastRow'>
          {/* Name */}
          <div className='FormGroup'>
            <label>Name Gast 1</label>
              <input className='InputText'
                type="Text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
          </div>
    
          {/* Dropdown menu */}
          <div className='FormGroup'>
            <label>Essenswünsche</label>
            <select className='Dropdown'
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Vegetarisch</option>
              <option value="option1">Fleisch</option>
              <option value="option2">Fisch</option>
            </select>
          </div>
    
    
          {/* Text input */}
          <div className='FormGroup'>
            <label>Besondere Anmerkungen</label>
            <textarea className='InputText'
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
          </div>
        </div>

        {/* Submit button */}
        <div>
          <button type="submit">Absenden</button>
        </div>
      </form>
    );
  };
  
  export default ContactForm;
  