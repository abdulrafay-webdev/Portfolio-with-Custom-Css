"use client";

import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);
  console.log(toggleNavbar);
  

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
        <Link href="/" style={linkStyle}>
          Home
        </Link>
        <Link href="/about" style={linkStyle}>
          About
        </Link>
        <Link href="/contact" style={linkStyle}>
          Contact
        </Link>
        <Link href="/projects" style={linkStyle}>
          Projects
        </Link>
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