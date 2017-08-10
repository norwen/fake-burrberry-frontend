import React, {Component} from 'react';
import './Description.css';

export default () => {
  return (
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
  )
}

