import React from 'react';
import styled from 'styled-components';

const Sizes = styled.div`
  display: none;
  
  @media screen and (min-width: 62rem) {
    display: inline-block;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 8.5rem;
    padding: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Size = styled.div`
  display: inline-block;
  margin: 0;
  margin-right: 5.5rem;
  padding: 0;
  
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const Selected = styled.span`
  font-weight: bold;
`;

const Help = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0;
  
  font-size: .75rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1rem;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  
  background: transparent;
  border: none;
`;

const Buttons = styled.div`
  margin: 0;
  margin-top: 1rem;
  padding: 0;
`;

const Button = styled.button`
  display: inline-block;
  margin: 0;
  margin-right: .5rem;
  padding-top: .5rem;
  padding-right: 1rem;
  padding-bottom: .5rem;
  padding-left: 1rem;
  
  font-size: .75rem;
  font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
  line-height: 1rem;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  
  text-align: center;
  
  background: transparent;
  border-radius: .125rem;
  border: 1px solid #171717;
`;

export default function() {
  return (
    <Sizes>
      <Header>
        <Size>Size: <Selected>XL</Selected></Size>
        <Help>Need size help?</Help>
      </Header>
      <Buttons>
        <Button>S</Button>
        <Button>M</Button>
        <Button>L</Button>
        <Button isSelected="true">XL</Button>
      </Buttons>
    </Sizes>
  );
}
