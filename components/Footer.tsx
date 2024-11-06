import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#66A5AD', color: '#FFFFFF', padding: '10px', textAlign: 'center' }}>
      <p>&copy; 2024 Abdulrafay. All Rights Reserved.</p>
      <p>
        <a href="#privacy" style={{ color: '#FF5722', textDecoration: 'none' }}>
          Privacy Policy
        </a>
        {' | '}
        <a href="#terms" style={{ color: '#FF5722', textDecoration: 'none' }}>
          Terms of Service
        </a>
      </p>
    </footer>
  );
}

export default Footer;
