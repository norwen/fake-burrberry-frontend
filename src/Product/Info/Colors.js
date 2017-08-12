import React from 'react';
import styled from 'styled-components';
import ButtonColor from "./ButtonColor";

const Selected = styled.p`
  padding-bottom: 1rem;
  margin: 0;

  font-size: .75rem;
  line-height: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const Colors = styled.div`
  padding-bottom: 2rem;
`;

const Buttons = styled.div`
  display: flex;
`;

export default function (props) {
  return (
    <Colors>
      <Selected>Colour: Honey</Selected>
      <Buttons>
        <ButtonColor name="Black" color="#000000"/>
        <ButtonColor name="Honey" color="#cfa880" isActive="true"/>
      </Buttons>
    </Colors>
  );
}
