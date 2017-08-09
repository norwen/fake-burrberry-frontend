import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
        <div>
        <header class="header">
          <a class="header__link" href="#"><img class="header__logo" src="img/logo.svg" alt="Burberry logo"/></a>
        </header>
    <div class="container">
      <h1 class="product-title">Long Cotton Gabardine Car Coat</h1>

      <div class="row">
        <div class="col-xs-12 col-md-7">
          <div class="gallery">
            <img class="gallery__photo" src="img/bitmap_4.jpg" srcset="img/bitmap_4@2x.jpg 2x,img/bitmap_4@3x.jpg 3x"/>
              <img class="gallery__photo" src="img/bitmap_2.jpg" srcset="img/bitmap_2@2x.jpg 2x,img/bitmap_2@3x.jpg 3x"/>
                <img class="gallery__photo" src="img/bitmap.jpg" srcset="img/bitmap@2x.jpg 2x,img/bitmap@3x.jpg 3x"/>
                  <img class="gallery__photo" src="img/bitmap_3.jpg" srcset="img/bitmap_3@2x.jpg 2x,img/bitmap_3@3x.jpg 3x"/>
          </div>
        </div>

        <div class="col-xs-12 col-md-5">
          <div class="product-info">
            <div class="product-info__price-container">
              <h1 class="product-info__price">110 000 руб</h1>
              <p class="product-info__article">Item 39428531</p>
            </div>

            <div class="product-colors">
              <p class="product-info__color_selected">Colour: Honey</p>
              <div class="product-colors-buttons">
                <button class="product-colors-buttons__button product-colors-buttons__button_bg-black" type="button">
                  Select this product in black color
                </button>
                <button class="product-colors-buttons__button product-colors-buttons__button_active
                      product-colors-buttons__button_bg-brown" type="button">
                  Select this product in brown color
                </button>
              </div>
            </div>

            <div class="product-buttons">
              <button class="product-buttons__button product-buttons__button_size" type="button">SELECT A SIZE</button>
              <button class="product-buttons__button product-buttons__button_store" type="button">FIND IN STORE</button>
              <button class="product-buttons__button_help" type="button">NEED SIZE HELP?</button>
            </div>
          </div>
        </div>
      </div>

      <hr class="blocks-delimiter"/>

        <div class="row">
          <div class="col-xs-12">
            <div class="product-description">
              <div class="product-description__header">
                <h2 class="product-description__title product-description__title_open">DESCRIPTION</h2>
              </div>

              <div class="product-description__text">
                <p>A refined car coat crafted in protective cotton gabardine.</p>
                <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that
                  protects
                  against wind and rain.</p>
                <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
                <p>The piece is finished with a distinctive check undercollar.</p>
                <br class="description-text-delimiter"/>
                  <ul>
                    <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to
                      size.
                    </li>
                    <li>Outer: 100% cotton</li>
                    <li>Check lining: 100% cotton</li>
                    <li>Sleeve lining: 100% viscose</li>
                    <li>Buttons: buffalo horn</li>
                    <li>Specialist dry clean</li>
                    <li>Made in Europe</li>
                    <li>Item 39428531</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>

        <hr class="blocks-delimiter" />

          <div class="row">
            <div class="col-xs-12">
              <div class="product-description product-shipping">
                <div class="product-description__header">
                  <h2 class="product-description__title">SHIPPING &amp; RETURNS</h2>
                </div>

                <div class="product-description__text_hidden"></div>
              </div>
            </div>
          </div>

          <div class="delivery">
            <div class="row">
              <div class="col-md-7">
                <img class="delivery__photo" src="img/bitmap_delivery.jpg"
                     srcset="img/bitmap_delivery@2x.jpg 2x,img/bitmap_delivery@3x.jpg 3x" alt="Delivery info"/>
              </div>
              <div class="col-md-5">
                <h2 class="delivery__header">
                  DELIVERY
                </h2>
                <div class="delivery__paragraph">
                  <h3 class="delivery__paragraph_header">Free Next Day Delivery</h3>
                  <p class="delivery__paragraph_text">Order before 7pm Monday to Thursday for delivery the next day</p>
                </div>
                <div class="delivery__paragraph">
                  <h3 class="delivery__paragraph_header">Collect-in-Store</h3>
                  <p class="delivery__paragraph_text">Order online today and pick up your items in store as early as
                    tomorrow</p>
                </div>
                <div class="delivery__paragraph">
                  <h3 class="delivery__paragraph_header">Free Returns</h3>
                  <p class="delivery__paragraph_text">Enjoy free returns on your order</p>
                </div>
                <div class="delivery__paragraph">
                  <h3 class="delivery__paragraph_header">Free Gift Packaging</h3>
                  <p class="delivery__paragraph_text">Discover our gift packaging, a gold lined box tied with a coloured
                    ribbon</p>
                </div>
              </div>
            </div>
          </div>

          <hr class="blocks-delimiter"/>

            <section class="product-recommendations">
              <div class="product-recommendations__header">
                <h2 class="product-recommendations__title">WE RECOMMEND</h2>
              </div>
              <div class="row">
                <div class="col-xs-6 col-md-3"><a href="#" class="recommendations__item">
                  <img class="recommendations-items__image" src="img/bitmap-6.jpg" alt="Emroided Hooded" />
                    <h3 class="recommendations-items__title">Emroided Hooded</h3>
                    <h5 class="recommendations-items__price">27 000 руб</h5>
                </a>
                </div>
                <div class="col-xs-6 col-md-3"><a href="#" class="recommendations__item">
                  <img class="recommendations-items__image" src="img/bitmap-7.jpg" alt="Relaxed Fit Stretch Jeans" />
                    <h3 class="recommendations-items__title">Relaxed Fit Stretch Jeans</h3>
                    <h5 class="recommendations-items__price">22 500 руб</h5>
                </a>
                </div>
                <div class="col-xs-6 col-md-3"><a href="#" class="recommendations__item">
                  <img class="recommendations-items__image" src="img/bitmap-8.jpg" alt="Leather and House Check" />
                    <h3 class="recommendations-items__title">Leather and House Check</h3>
                    <h5 class="recommendations-items__price">120 000 руб</h5>
                </a>
                </div>
                <div class="col-xs-6 col-md-3"><a href="#" class="recommendations__item">
                  <img class="recommendations-items__image" src="img/bitmap-9.jpg" alt="Leather Wingtip Check" />
                    <h3 class="recommendations-items__title">Leather Wingtip Check</h3>
                    <h5 class="recommendations-items__price">46 000 руб</h5>
                </a>
                </div>
              </div>

              <section class="recommendations-more">
                <div class="recommendations-more__header">
                  <h2 class="recommendations-more__title">MORE FOR YOU</h2>
                </div>

                <nav class="recommendations-more__links">
                  <a class="recommendations-more__link" href="#">Men’s Black Trench Coats</a>
                  <a class="recommendations-more__link" href="#">Men’s Short Trench Coats</a>
                  <a class="recommendations-more__link" href="#">Men’s Long Trench Coats</a>
                </nav>
              </section>
            </section>
    </div>

    <footer class="main-footer">
      <div class="container">
        <div class="main-footer__navs">
          <div class="row">
            <div class="col-md-3">
              <h3 class="main-footer__header">
                CUSTOMER SERVICE
              </h3>
              <nav class="footer-menu__nav">
                <a href="#" class="main-footer__link">
                  Contact Us
                </a>
                <a href="#" class="main-footer__link">
                  Payment
                </a>
                <a href="#" class="main-footer__link">
                  Shipping
                </a>
                <a href="#" class="main-footer__link">
                  Returns
                </a>
                <a href="#" class="main-footer__link">
                  Faqs
                </a>
                <a href="#" class="main-footer__link">
                  Live Chat
                </a>
                <a href="#" class="main-footer__link">
                  The Burberry App
                </a>
                <a href="#" class="main-footer__link">
                  Store Locator
                </a>
              </nav>
            </div>

            <div class="col-md-3">
              <h3 class="main-footer__header">
                OUR COMPANY
              </h3>
              <nav class="footer-menu__nav">
                <a href="#" class="main-footer__link">
                  Our History
                </a>
                <a href="#" class="main-footer__link">
                  Burberry Group Pic
                </a>
                <a href="#" class="main-footer__link">
                  Careers
                </a>
                <a href="#" class="main-footer__link">
                  Corporate Responsibility
                </a>
                <a href="#" class="main-footer__link">
                  Site Map
                </a>
              </nav>
            </div>

            <div class="col-md-3">
              <h3 class="main-footer__header">
                LEGAL & COOKIES
              </h3>
              <nav class="footer-menu__nav">
                <a href="#" class="main-footer__link">
                  Terms & Conditions
                </a>
                <a href="#" class="main-footer__link">
                  Privacy Policy
                </a>
                <a href="#" class="main-footer__link">
                  Cookie Policy
                </a>
                <a href="#" class="main-footer__link">
                  Accessibility Statement
                </a>
                <a href="#" class="main-footer__link">
                  Japan Only - SCTL indications
                </a>
              </nav>
            </div>
          </div>

        </div>

        <button class="main-footer__btn main-footer__btn_country" type="button">
          Shipping country: Russian Federation
        </button>

        <button class="main-footer__btn main-footer__btn_lang" type="button">
          Language: English
        </button>

        <div class="main-footer__contacts">
          <h4 class="main-footer__help">Need help?</h4>
          <a class="main-footer__contact">Find out more and contact us</a>
        </div>
      </div>
    </footer>
    </div>
    );
  }
}

export default App;
