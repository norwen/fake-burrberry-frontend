import React, { Component } from 'react';
import './Footer.css';

export default () => {
  return (
        <footer className="main-footer">
          <div className="container">
            <div className="main-footer__navs">
              <div className="row">
                <div className="col-md-3">
                  <h3 className="main-footer__header">
                    CUSTOMER SERVICE
                  </h3>
                  <nav className="footer-menu__nav">
                    <a href="#" className="main-footer__link">
                      Contact Us
                    </a>
                    <a href="#" className="main-footer__link">
                      Payment
                    </a>
                    <a href="#" className="main-footer__link">
                      Shipping
                    </a>
                    <a href="#" className="main-footer__link">
                      Returns
                    </a>
                    <a href="#" className="main-footer__link">
                      Faqs
                    </a>
                    <a href="#" className="main-footer__link">
                      Live Chat
                    </a>
                    <a href="#" className="main-footer__link">
                      The Burberry App
                    </a>
                    <a href="#" className="main-footer__link">
                      Store Locator
                    </a>
                  </nav>
                </div>

                <div className="col-md-3">
                  <h3 className="main-footer__header">
                    OUR COMPANY
                  </h3>
                  <nav className="footer-menu__nav">
                    <a href="#" className="main-footer__link">
                      Our History
                    </a>
                    <a href="#" className="main-footer__link">
                      Burberry Group Pic
                    </a>
                    <a href="#" className="main-footer__link">
                      Careers
                    </a>
                    <a href="#" className="main-footer__link">
                      Corporate Responsibility
                    </a>
                    <a href="#" className="main-footer__link">
                      Site Map
                    </a>
                  </nav>
                </div>

                <div className="col-md-3">
                  <h3 className="main-footer__header">
                    LEGAL & COOKIES
                  </h3>
                  <nav className="footer-menu__nav">
                    <a href="#" className="main-footer__link">
                      Terms & Conditions
                    </a>
                    <a href="#" className="main-footer__link">
                      Privacy Policy
                    </a>
                    <a href="#" className="main-footer__link">
                      Cookie Policy
                    </a>
                    <a href="#" className="main-footer__link">
                      Accessibility Statement
                    </a>
                    <a href="#" className="main-footer__link">
                      Japan Only - SCTL indications
                    </a>
                  </nav>
                </div>
              </div>

            </div>

            <button className="main-footer__btn main-footer__btn_country" type="button">
              Shipping country: Russian Federation
            </button>

            <button className="main-footer__btn main-footer__btn_lang" type="button">
              Language: English
            </button>

            <div className="main-footer__contacts">
              <h4 className="main-footer__help">Need help?</h4>
              <a className="main-footer__contact">Find out more and contact us</a>
            </div>
          </div>
        </footer>
  )
}