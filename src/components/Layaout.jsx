import React from 'react';
import Footer from './Footer';

const Layaout = ({ children }) => {
  return (
    <div className='App'>
      {children}
      <Footer />
    </div>
  );
};

export default Layaout;
