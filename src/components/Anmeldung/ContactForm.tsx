'use client'

import React, { use, useState } from 'react';
import './contactForm.css'
import './switch.css'

const ContactForm: React.FC = () => {
    // Define state variables for form fields
    const [isToggled, setIsToggled] = useState (true);
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
          {/* Toggle Switch */}
          <div>
            Ja <label className="Switch"> 
                <input type="checkbox" 
                   checked={isToggled} 
                   onChange={()=>setIsToggled(!isToggled)} />
                <span className="Slider"></span> 
                </label> Leider nicht
          </div>
    
          {/* Checkbox */}
          <div className='Checkbox'>
            <label>
              <input className='Check'
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
                placeholder='Vorname Nachname'
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
            <textarea className='InputTextArea'
              placeholder='z.B.: Unverträglichkeiten, Vegan, etc...'
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
  