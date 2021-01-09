import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layaout = ({ children }) => {
  return (
    <div className='App'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layaout;