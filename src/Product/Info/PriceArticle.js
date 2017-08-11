import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl'

const PriceArticle = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  padding-bottom: 1rem;
`;

const Price = styled.h1`
  margin: 0;

  font-size: 1em;
  line-height: 1.1875rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const Article = styled.p`
  align-self: center;

  font-size: .75rem;
  line-height: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;


export default function(props) {
  return (
    <PriceArticle>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency="RUB"
          currencyDisplay="symbol"
          minimumFractionDigits="0"
        />
      </Price>
      <Article>Item {props.article}</Article>
    </PriceArticle>
  )
}