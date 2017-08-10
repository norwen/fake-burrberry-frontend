import React, {Component} from 'react';
import './Info.css';

export default () => {
    return (
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
    )
}


