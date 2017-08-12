import React, {Component} from 'react';
import styled from 'styled-components';
import {Helmet} from "react-helmet";
import Gallery from "./Gallery";
import Description from "./Description";
import Recommendations from './Recommendations'
import Info from './Info';
import Delivery from './Delivery';
import BlockDelimiter from "./BlockDelimiter";
import PhotoMain from "./Desktop/PhotoMain";
import Head from "./Desktop/Head";
import ImageDesc from "./Description/ImageDesc";
import Photos from "./Photos";

const Name = styled.h1`
  padding: 1rem;
  margin: 0;

  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #171717;
  font-family: Lora, serif;
  
  @media (min-width: 48rem) {
    padding: 1rem .5rem;
  } 
`;

const SmallVisible = styled.div`
  @media (min-width: 48rem) {
    display: none;
  }
`;

const MidVisible = styled.div`
  @media (min-width: 62rem) {
    display: none;
  }
`;

const LargeVisible = styled.div`
  display: none;
  @media (min-width: 62rem) {
    display: block;
  }
`;

const DescriptionContainer = styled.section`
  @media (min-width: 62rem) {
    padding: 4rem 0;
  }
`;

class Product extends Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Burberry</title>
        </Helmet>

        <Head bgColor="#d4bdad">
          <div className="container">
            <MidVisible>
              <Name>Long Cotton Gabardine Car Coat</Name>
            </MidVisible>

            <div className="row middle-lg">
              <div className="col-xs-12 col-md-7 col-lg-6">
                <MidVisible>
                  <Gallery/>
                </MidVisible>
                <LargeVisible>
                  <PhotoMain src="images/bitmap_4.jpg"/>
                </LargeVisible>
              </div>

              <div className="col-xs-12 col-md-5 col-lg-6">
                <Info/>
              </div>
            </div>
          </div>
        </Head>

        <BlockDelimiter/>
        <div className="container">
          <DescriptionContainer>
            <div className="row">
              <div className="col-xs-12 col-lg-4">
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
              <div className="col-lg-8">
                <ImageDesc src="images/bitmap-desc.png"/>
              </div>
            </div>
          </DescriptionContainer>

          <BlockDelimiter/>

          <SmallVisible>
            <div className="row">
              <div className="col-md-12">
                <Description title="Shipping & returns">
                  <p>Purchases must be returned from the original shipping country with the original Returns Form.</p>
                </Description>
              </div>
            </div>
          </SmallVisible>

          <LargeVisible>
            <Photos/>
          </LargeVisible>

          <Delivery/>

          <BlockDelimiter/>

          <Recommendations/>
        </div>
      </main>
    )
  }
}

export default Product;