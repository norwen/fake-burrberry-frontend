import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
 @media screen and (min-width: 62rem) {
    background:  ${props => (props.bgColor ? props.bgColor : 'transparent')};
  }
`;

export default Head;