import React from 'react';
import styled from 'styled-components';

import Colors from "./Colors";
import Buttons from "./Buttons";
import PriceArticle from "./PriceArticle";

const Info = styled.section`
  padding: 1rem .5rem 3rem .5rem;

  @media (min-width: 48rem) {
    padding: 0 0 3rem 0;
  }
`;

export default function() {
  return(
    <Info>
      <PriceArticle price="110000" article="39428531"/>
      <Colors/>
      <Buttons/>
    </Info>
  )
}


