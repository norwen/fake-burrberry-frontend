import React from 'react';
import styled from 'styled-components';
import Button from "../Button";

const Buttons = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 2rem;

  border-top: solid 1px #c6c6c6;
`;

const ButtonSize = Button.extend`
  color: #ffffff;

  background: #171717;
  border: 1px solid #171717;
`;

const ButtonStore = Button.extend`
  color: #171717;

  background: #ffffff;
  border: 1px solid #999999;
`;

const ButtonHelp = styled.button`
  margin-top: .5rem;
  padding: 0;
  align-self: start;

  font-size: .75rem;
  line-height: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;

  color: #171717;
  border: none;
  background-color: transparent;
`;

export default function () {
  return (
    <Buttons>
      <ButtonSize type="button">SELECT A SIZE</ButtonSize>
      <ButtonStore type="button">FIND IN STORE</ButtonStore>
      <ButtonHelp type="button">NEED SIZE HELP?</ButtonHelp>
    </Buttons>
  )
}