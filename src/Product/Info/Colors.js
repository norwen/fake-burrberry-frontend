import React from 'react';
import styled from 'styled-components';
import ButtonColor from "./ButtonColor";

const Color = styled.div`
  display: inline-block;
  padding-bottom: 1rem;
  margin: 0;

  font-size: .75rem;
  line-height: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const Selected = styled.span`
  font-weight: bold;
`;

const Colors = styled.div`
  padding-bottom: 2rem;
  
  @media (min-width: 62rem) {
    padding-bottom: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

export default function (props) {
  return (
    <Colors>
      <Color>Colour: <Selected>Honey</Selected></Color>
      <Buttons>
        <ButtonColor name="Black" color="#000000"/>
        <ButtonColor name="Honey" color="#cfa880" isActive="true"/>
      </Buttons>
    </Colors>
  );
}
