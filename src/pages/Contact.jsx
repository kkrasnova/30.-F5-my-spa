import React, { useState } from 'react';
import './Contact.css';  // Імпортуємо CSS

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xwpkoqow", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-container">
      <h1>Зв'яжіться з нами</h1>
      
      {submitted ? (
        <div className="success-message">
          Дякуємо! Ваше повідомлення відправлено.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email" 
              name="email"
              required
              placeholder="Ваш email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Повідомлення:</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Ваше повідомлення"
            />
          </div>

          <button type="submit">Надіслати</button>
        </form>
      )}
    </div>
  );
}

export default Contact;