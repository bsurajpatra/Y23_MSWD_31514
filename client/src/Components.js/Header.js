import React from 'react';
import KLUlogo from './KLUlogo.jpeg';

const Header = () => {
  return (
    <header>
      <h1 className="header">KL University</h1>

      <img src={KLUlogo} alt="KLU logo" />
    </header>
  );
};

export default Header;
