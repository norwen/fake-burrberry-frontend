import React, {Component} from 'react';
import Gallery from "./Gallery";
import Description from "./Description";
import Recommendations from './Recommendations'
import Info from './Info';
import Delivery from './Delivery';

class Product extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>

        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Gallery/>
          </div>

          <div className="col-xs-12 col-md-5">
            <Info/>
          </div>
        </div>

        <hr className="blocks-delimiter"/>

        <div className="row">
          <Description title="Description">
            <p>A refined car coat crafted in protective cotton gabardine.</p>
            <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric
              that
              protects
              against wind and rain.</p>
            <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
            <p>The piece is finished with a distinctive check undercollar.</p>
            <br/>
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
          </Description>
        </div>

        <hr className="blocks-delimiter"/>

        <div className="row">
          <Description title="Shipping & returns"/>
        </div>

        <Delivery/>

        <hr className="blocks-delimiter"/>

        <Recommendations/>
      </div>
    )
  }
}

export default Product;