import React from 'react';

function AboutUs() {
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
      }}>About Us</h1>
      <p>Hello, I'm Hamza A.K, a student at FAST NUCES. I'm a passionate MERN developer and web designer, always eager to learn new technologies and improve my skills.</p>
      <p>You can reach me at <a href="mailto:k224647@nu.edu.pk" style={{ color: '#D6A0FF', textDecoration: 'none', borderBottom: '1px solid #D6A0FF' }}>k224647@nu.edu.pk</a>.</p>
    </div>
  );
}

export default AboutUs;
