import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      backgroundColor: '#000', 
      color: '#ff00ff', 
      fontFamily: 'Arial, sans-serif',
      height: '100vh', // Set height to 100 viewport height
      width: '100vw', // Set width to 100 viewport width
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#ff00ff' }}>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFoundPage;
