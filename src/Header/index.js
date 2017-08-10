import React, { Component } from 'react';
import './Header.css';
import logo from '../assests/images/logo.svg'

export default () => {
  return (
      <header className="header">
        <a className="header__link" href="#"><img className="header__logo" src={logo} alt="Burberry logo"/></a>
      </header>
  )
}

