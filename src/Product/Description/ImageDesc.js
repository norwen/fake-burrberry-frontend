import React from 'react';
import styled from 'styled-components';

const ImageDesc = styled.img`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    width: 100%;
    height: auto; 
    padding: 0;
    margin: 0;
    display: block;
    vertical-align: middle;
  }
`;

export default ImageDesc;
