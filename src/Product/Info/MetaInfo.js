import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const MetaInfo = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  padding-bottom: 1rem;
  
  @media (min-width: 62rem) {
    padding-bottom: 3rem;
  }
`;

const Price = styled.h1`
  margin: 0;

  font-weight: 400;
  font-size: 1em;
  line-height: 1.1875rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  
  @media (min-width: 62rem) {
    font-weight: 500;
  }
`;

const Article = styled.p`
  align-self: center;
  margin: 0;

  font-size: .75rem;
  line-height: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  
  @media (min-width: 62rem) {
    display: none;
  }
`;

export default function(props) {
  return (
    <MetaInfo>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency="RUB"
          currencyDisplay="symbol"
          minimumFractionDigits={0}
        />
      </Price>
      <Article>Item {props.article}</Article>
    </MetaInfo>
  );
}
