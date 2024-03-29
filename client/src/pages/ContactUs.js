import React, { useState } from 'react';
import Cart from "../components/Cart";

import { validateEmail } from '../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', company: '', email: '', phoneNumber: '', city: '', state: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, company, email, phoneNumber, city, state, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };
  
    return (
        <div className="container">
      <section>
        <h1 data-testid="h1tag">Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="company">Company:</label>
            <input type="text" name="company" defaultValue={company} onBlur={handleChange} />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="phoneNumber">Phone #:</label>
            <input type="number" name="phoneNumber" defaultValue={phoneNumber} onBlur={handleChange} />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="city">City:</label>
            <input type="text" name="city" defaultValue={city} onBlur={handleChange} />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="state">State:</label>
            <input type="text" name="state" defaultValue={state} onBlur={handleChange} />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit">Submit</button>
        </form>
      </section>
      <Cart />
      </div>
    );
  }
  
  export default ContactForm;