import React, {Component} from 'react';
import styled from 'styled-components';
import {Helmet} from "react-helmet";
import Gallery from "./Gallery";
import Description from "./Description";
import Recommendations from './Recommendations'
import Info from './Info';
import Delivery from './Delivery';
import BlockDelimiter from "./BlockDelimiter";

const ProductTitle = styled.h1`
  padding: 1rem .5rem;
  margin: 0;

  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #171717;
  font-family: Lora, serif;
`;

class Product extends Component {

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Burberry</title>
        </Helmet>
        <ProductTitle>Long Cotton Gabardine Car Coat</ProductTitle>

        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Gallery/>
          </div>

          <div className="col-xs-12 col-md-5">
            <Info/>
          </div>
        </div>

        <BlockDelimiter/>

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

        <BlockDelimiter/>

        <div className="row">
          <Description title="Shipping & returns">
            <p>Purchases must be returned from the original shipping country with the original Returns Form.</p>
          </Description>
        </div>

        <Delivery/>

        <BlockDelimiter/>

        <Recommendations/>
      </div>
    )
  }
}

export default Product;