import React from 'react';
import PhotoSingle from '../PhotoSingle';

const ImageDesc = PhotoSingle.extend`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
  }
`;

export default ImageDesc;