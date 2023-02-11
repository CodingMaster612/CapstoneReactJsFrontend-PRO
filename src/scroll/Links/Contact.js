import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);

    // Here you can add the code to send the contact form data to your server or email
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you for contacting us! We will get back to you as soon as possible.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
