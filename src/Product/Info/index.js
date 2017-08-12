import React from 'react';
import styled from 'styled-components';

import Colors from "./Colors";
import Buttons from "./Buttons";
import PriceArticle from "./PriceArticle";
import Sizes from "./Sizes";

const Info = styled.section`
  padding: 1rem .5rem 3rem .5rem;

  @media (min-width: 48rem) {
    padding: 0 0 3rem 0;
  }
  
  @media (min-width: 62rem) {
    padding: 0;
    display: flex;
    height: 100%;
    flex-flow: column;
    justify-content: center;
  }
`;

const ColorsSizes = styled.div`
  display: flex;
  
  @media (min-width: 62rem) {
    padding-bottom: 1.5rem;
  }
`;

const Name = styled.h1`
  display: none;
  
  @media (min-width: 62rem) {
    display: block;
    margin: 0;
    padding-bottom: .5rem;
  
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.75rem;
    color: #171717;
    font-family: Lora, serif;
  }
`;

const Text = styled.div`
  display: none;
  
  @media (min-width: 62rem) {
    display: block;
  }
`;

const Title = styled.h3`
  height: .825rem;
  margin: 0 0 .25rem;

  font-size: .75rem;
  line-height: .825rem;
`;

const Content = styled.p`
  font-size: .75rem;
  line-height: 1rem;
`;

export default function () {
  return (
    <Info>
        <Name>Long Cotton Gabardine Car Coat | Long Cotton Gabardine Car Coat</Name>
        <PriceArticle price="110000" article="39428531"/>
        <ColorsSizes>
          <Colors/>
          <Sizes/>
        </ColorsSizes>
        <Buttons/>
        <Text>
          <Title>Free Next Day Delivery</Title>
          <Content>Order before 7pm Monday to Thursday for delivery the next day</Content>
        </Text>
    </Info>
  )
}


