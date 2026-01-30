import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="container" style={{ textAlign: 'center' }}>
      <h2>Get In Touch</h2>
      <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '30px' }}>
        I'd love to hear from you! Feel free to reach out for any inquiries or collaboration opportunities.
      </p>
      
      <div style={{ maxWidth: '500px', margin: '0 auto', marginBottom: '40px' }}>
        {submitted ? (
          <div style={{
            background: '#d4edda',
            color: '#155724',
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px'
          }}>
            ✓ Thank you for your message! I'll get back to you soon.
          </div>
        ) : null}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1em',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1em',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1em',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="cta-button"
            style={{ width: '100%' }}
          >
            Send Message
          </button>
        </form>
      </div>

      <div style={{
        background: '#f5f5f5',
        padding: '30px',
        borderRadius: '8px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        <div>
          <h3 style={{ color: '#667eea', marginBottom: '10px' }}>Phone</h3>
          <a href="tel:9739879926" style={{ color: '#667eea', textDecoration: 'none' }}>
            9739879926
          </a>
        </div>
        <div>
          <h3 style={{ color: '#667eea', marginBottom: '10px' }}>Email</h3>
          <a href="mailto:harsha.sudha2006@gmail.com" style={{ color: '#667eea', textDecoration: 'none' }}>
            harsha.sudha2006@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
