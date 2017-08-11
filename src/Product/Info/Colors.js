import React from 'react';
import styled from 'styled-components';
import ButtonColor from "./ButtonColor";

const ColorSelected = styled.p`
  padding-bottom: 1rem;

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

export default function(props) {
  return (
      <Colors>
        <ColorSelected>Colour: Honey</ColorSelected>
        <Buttons>
          <ButtonColor name="Black" color="#000000"/>
          <ButtonColor name="Honey" color="#cfa880" isActive="true"/>
        </Buttons>
      </Colors>
  );
}
