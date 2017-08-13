import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Buttons = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 2rem;

  border-top: solid 1px #c6c6c6;
  
  @media (min-width: 62rem) {
    padding-top: 0;
    padding-bottom: 1.5rem;
    border: none;
    flex-flow: row;
    justify-content: flex-start;
  }
`;

const Primary = Button.extend`
  color: #ffffff;

  background: #171717;
  border: 1px solid #171717;
  
  @media (min-width: 62rem) {
    display: inline-block;
    width: 14.5rem;
    margin-right: 1rem;
  }
`;

const Secondary = Button.extend`
  color: #171717;

  background: #ffffff;
  border: 1px solid #999999;
  
  @media (min-width: 62rem) {
    display: inline-block;
    width: 14.5rem;
    background: transparent;
    border: solid 1px #171717;
  }
`;

const Text = styled.button`
  margin-top: .5rem;
  padding: 0;
  align-self: start;

  font-size: .75rem;
  line-height: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;

  color: #171717;
  border: none;
  background-color: transparent;
  
  @media (min-width: 62rem) {
    display: none;
  }
  
  
`;

export default function() {
  return (
    <Buttons>
      <Primary type="button">SELECT A SIZE</Primary>
      <Secondary type="button">FIND IN STORE</Secondary>
      <Text type="button">NEED SIZE HELP?</Text>
    </Buttons>
  );
}
