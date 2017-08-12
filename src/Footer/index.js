import React from 'react';
import styled from 'styled-components';
import Navs from "./Navs";

const Footer = styled.footer`
  display: block;
 padding: 1rem 1rem 2rem 1rem;
  background: #f3f3f3;
  
  @media (min-width: 48rem) {
    padding: 2rem .5rem;
  }
`;

const ButtonText = styled.button`
  display: block;
  margin-top: 1rem;
  padding: 0;
  
  line-height: 1rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
   color: #999999;
   
  background: transparent;
  border: none;
 
 @media (min-width: 48rem) {
    display: inline-block;
    margin-top: 1.25rem;
    margin-right: 1.25rem;
  }
`;

const Contacts = styled.div`
  padding-bottom: 2rem;
  padding-left: .5rem;
  padding-right: .5rem;
  text-align: center;
  
  @media (min-width: 48rem) {
    display: none;
  }
`;

const LinkContact = styled.a`
  margin: 0;

  font-size: .875rem;
  line-height: 17px;
  color: #171717;
  font-family: Lora, serif;
  font-style: italic;
`;

const Title = styled.h4`
  margin: 1.5rem 0 1rem;

  font-weight: bold;
  font-size: 1rem;
  line-height: 19px;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

export default function () {
  return (
    <Footer>
      <Navs/>

      <ButtonText type="button">
        Shipping country: Russian Federation
      </ButtonText>

      <ButtonText type="button">
        Language: English
      </ButtonText>

      <Contacts>
        <Title>Need help?</Title>
        <LinkContact>Find out more and contact us</LinkContact>
      </Contacts>
    </Footer>
  )
}