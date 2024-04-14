import React from 'react';

function ContactUs() {
  return (
    <div style={{ 
      backgroundColor: '#121212', 
      color: '#FFFFFF', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      height: '100vh', // Set height to full viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1 style={{ 
        color: '#D6A0FF', 
        textShadow: '0 0 10px #D6A0FF, 0 0 20px #D6A0FF, 0 0 30px #D6A0FF, 0 0 40px #D6A0FF, 0 0 50px #D6A0FF, 0 0 60px #D6A0FF, 0 0 70px #D6A0FF',
        marginBottom: '20px'
      }}>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us:</p>
      <p>Email: <a href="mailto:your.email@example.com" style={{ color: '#D6A0FF', textDecoration: 'none', borderBottom: '1px solid #D6A0FF' }}>your.email@example.com</a></p>
      <p>Phone: <a href="tel:+1234567890" style={{ color: '#D6A0FF', textDecoration: 'none', borderBottom: '1px solid #D6A0FF' }}>+1 (234) 567-890</a></p>
    </div>
  );
}

export default ContactUs;
