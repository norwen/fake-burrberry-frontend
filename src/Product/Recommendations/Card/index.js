import React from 'react';
import styled from 'styled-components';
import {FormattedNumber} from "react-intl";

export const Container = styled.a`
  display: flex;
  flex-flow: column;
  margin: 0 0 2rem;

  color: #111111;
  text-decoration: none;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  padding-bottom: .5rem;
  vertical-align: middle;
`;


export const Title = styled.h3`
  padding-bottom: .5rem;

  line-height: 19px;
  font-size: 1rem;
  color: #171717;
  font-weight: 400;
  font-family: Lora, Helvetica, Arial, serif;
`;

export const Price = styled.h5`
  color: #999999;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: 300;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;


export default(props) => {

  return (
    <Container href="#">
      <Photo src={props.photoUrl} alt={props.nameFull}/>
      <Title>{props.name}</Title>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency="RUB"
          currencyDisplay="symbol"
          minimumFractionDigits={0}
        />
      </Price>
    </Container>
  );
}