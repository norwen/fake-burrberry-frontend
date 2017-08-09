import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="header">
          <a className="header__link" href="#"><img className="header__logo" src="img/logo.svg" alt="Burberry logo"/></a>
        </header>
    )
  }
}

export default Header;

