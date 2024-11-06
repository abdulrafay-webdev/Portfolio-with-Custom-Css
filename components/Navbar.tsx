"use client"

import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <nav
      style={{
        backgroundColor: '#66A5AD',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#FFFFFF',
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Creative Portfolio</div>
      <div onClick={toggleNavbar} style={{ cursor: 'pointer', display: 'block', fontSize: '24px' }}>
        ☰
      </div>
      <div
        style={{
          display: isOpen ? 'block' : 'none',
          position: 'absolute',
          top: '60px',
          right: '20px',
          backgroundColor: '#2C5364',
          padding: '10px 20px',
          borderRadius: '8px',
          textAlign:'center'
        }}
      >
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/about" style={linkStyle}>
          About
        </a>
        <a href="/contact" style={linkStyle}>
          Contact
        </a>
      </div>
    </nav>
    </div>
  );
}

const linkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',
  padding: '8px 16px',
  display: 'block',
};

export default Navbar;
678