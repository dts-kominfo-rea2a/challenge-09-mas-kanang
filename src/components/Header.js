// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="title">Call a Friend</div>
        <div className="sub-title">your friendly contact app</div>
        <div className="divider">
          ******************************************************************************************************************
        </div>
      </div>
    </>
  );
};


export default Header;