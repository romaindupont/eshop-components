import React, { useState } from 'react';
import './style.scss';
import Logo from '../assets/images/logoAccueil.svg';
import Bells from '../assets/images/bell.svg';

const Header = ({ Title1, Title2 }) => {
  const [ number ] = useState(2)
  return (
    <header className="eshop-header">
        <div className="eshop-header-left">
          <img className="eshop-header-logo" src={Logo} alt="" />
          <h1 className="eshop-header-title">{Title1}</h1>
        </div>
        <div className="eshop-header-right">
        <div className="eshop-bells">
          <img className="eshop-header-bell" src={Bells} alt="" />
          <span className="eshop-header-number">{number}</span>
        </div>
        <h2 className="eshop-header-title2">{Title2}</h2>
        <span className="eshop-header-circle"></span>
        </div>
      </header>
  )
}

export default Header;

