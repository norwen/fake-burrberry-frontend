import React, {Component} from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <div className="container">
            <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>

            <div className="row">
              <div className="col-xs-12 col-md-7">
                <Gallery/>
              </div>

              <div className="col-xs-12 col-md-5">
                <div className="product-info">
                  <div className="product-info__price-container">
                    <h1 className="product-info__price">110 000 руб</h1>
                    <p className="product-info__article">Item 39428531</p>
                  </div>

                  <div className="product-colors">
                    <p className="product-info__color_selected">Colour: Honey</p>
                    <div className="product-colors-buttons">
                      <button className="product-colors-buttons__button product-colors-buttons__button_bg-black"
                              type="button">
                        Select this product in black color
                      </button>
                      <button className="product-colors-buttons__button product-colors-buttons__button_active
                      product-colors-buttons__button_bg-brown" type="button">
                        Select this product in brown color
                      </button>
                    </div>
                  </div>

                  <div className="product-buttons">
                    <button className="product-buttons__button product-buttons__button_size" type="button">SELECT A
                      SIZE
                    </button>
                    <button className="product-buttons__button product-buttons__button_store" type="button">FIND IN
                      STORE
                    </button>
                    <button className="product-buttons__button_help" type="button">NEED SIZE HELP?</button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="blocks-delimiter"/>

            <div className="row">
              <div className="col-xs-12">
                <div className="product-description">
                  <div className="product-description__header">
                    <h2 className="product-description__title product-description__title_open">DESCRIPTION</h2>
                  </div>

                  <div className="product-description__text">
                    <p>A refined car coat crafted in protective cotton gabardine.</p>
                    <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric
                      that
                      protects
                      against wind and rain.</p>
                    <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
                    <p>The piece is finished with a distinctive check undercollar.</p>
                    <br className="description-text-delimiter"/>
                    <ul>
                      <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly
                        according to
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

            <hr className="blocks-delimiter"/>

            <div className="row">
              <div className="col-xs-12">
                <div className="product-description product-shipping">
                  <div className="product-description__header">
                    <h2 className="product-description__title">SHIPPING &amp; RETURNS</h2>
                  </div>

                  <div className="product-description__text_hidden"></div>
                </div>
              </div>
            </div>

            <div className="delivery">
              <div className="row">
                <div className="col-md-7">
                  <img className="delivery__photo" src="img/bitmap_delivery.jpg"
                       srcSet="img/bitmap_delivery@2x.jpg 2x,img/bitmap_delivery@3x.jpg 3x" alt="Delivery info"/>
                </div>
                <div className="col-md-5">
                  <h2 className="delivery__header">
                    DELIVERY
                  </h2>
                  <div className="delivery__paragraph">
                    <h3 className="delivery__paragraph_header">Free Next Day Delivery</h3>
                    <p className="delivery__paragraph_text">Order before 7pm Monday to Thursday for delivery the next
                      day</p>
                  </div>
                  <div className="delivery__paragraph">
                    <h3 className="delivery__paragraph_header">Collect-in-Store</h3>
                    <p className="delivery__paragraph_text">Order online today and pick up your items in store as early
                      as
                      tomorrow</p>
                  </div>
                  <div className="delivery__paragraph">
                    <h3 className="delivery__paragraph_header">Free Returns</h3>
                    <p className="delivery__paragraph_text">Enjoy free returns on your order</p>
                  </div>
                  <div className="delivery__paragraph">
                    <h3 className="delivery__paragraph_header">Free Gift Packaging</h3>
                    <p className="delivery__paragraph_text">Discover our gift packaging, a gold lined box tied with a
                      coloured
                      ribbon</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="blocks-delimiter"/>

            <section className="product-recommendations">
              <div className="product-recommendations__header">
                <h2 className="product-recommendations__title">WE RECOMMEND</h2>
              </div>
              <div className="row">
                <div className="col-xs-6 col-md-3"><a href="#" className="recommendations__item">
                  <img className="recommendations-items__image" src="img/bitmap-6.jpg" alt="Emroided Hooded"/>
                  <h3 className="recommendations-items__title">Emroided Hooded</h3>
                  <h5 className="recommendations-items__price">27 000 руб</h5>
                </a>
                </div>
                <div className="col-xs-6 col-md-3"><a href="#" className="recommendations__item">
                  <img className="recommendations-items__image" src="img/bitmap-7.jpg" alt="Relaxed Fit Stretch Jeans"/>
                  <h3 className="recommendations-items__title">Relaxed Fit Stretch Jeans</h3>
                  <h5 className="recommendations-items__price">22 500 руб</h5>
                </a>
                </div>
                <div className="col-xs-6 col-md-3"><a href="#" className="recommendations__item">
                  <img className="recommendations-items__image" src="img/bitmap-8.jpg" alt="Leather and House Check"/>
                  <h3 className="recommendations-items__title">Leather and House Check</h3>
                  <h5 className="recommendations-items__price">120 000 руб</h5>
                </a>
                </div>
                <div className="col-xs-6 col-md-3"><a href="#" className="recommendations__item">
                  <img className="recommendations-items__image" src="img/bitmap-9.jpg" alt="Leather Wingtip Check"/>
                  <h3 className="recommendations-items__title">Leather Wingtip Check</h3>
                  <h5 className="recommendations-items__price">46 000 руб</h5>
                </a>
                </div>
              </div>

              <section className="recommendations-more">
                <div className="recommendations-more__header">
                  <h2 className="recommendations-more__title">MORE FOR YOU</h2>
                </div>

                <nav className="recommendations-more__links">
                  <a className="recommendations-more__link" href="#">Men’s Black Trench Coats</a>
                  <a className="recommendations-more__link" href="#">Men’s Short Trench Coats</a>
                  <a className="recommendations-more__link" href="#">Men’s Long Trench Coats</a>
                </nav>
              </section>
            </section>
          </div>
          <Footer/>


        </div>
    );
  }
}

export default App;
