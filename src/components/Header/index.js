import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/logo.svg'

class Header extends Component {
  render() {
    return (
        <header className="header">
          <a className="header__link" href="#"><img className="header__logo" src={logo} alt="Burberry logo"/></a>
        </header>
    )
  }
}

export default Header;

