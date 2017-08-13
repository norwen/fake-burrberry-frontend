import React from 'react';
import styled from 'styled-components';

const galleryPhotos = [
  {
    src: 'images/bitmap_4.jpg',
    src2x: '../images/bitmap_4@2x.jpg 2x',
    src3x: '../images/bitmap_4@3x.jpg 3x',
  },
  {
    src: 'images/bitmap_4.jpg',
    src2x: '../images/bitmap_4@2x.jpg 2x',
    src3x: '../images/bitmap_4@3x.jpg 3x',
  },
  {
    src: 'images/bitmap_2.jpg',
    src2x: '../images/bitmap@2x.jpg 2x',
    src3x: '../images/bitmap@3x.jpg 3x',
  },
  {
    src: 'images/bitmap_3.jpg',
    src2x: '../images/bitmap_3@2x.jpg 2x',
    src3x: '../images/bitmap_3@3x.jpg 3x',
  },
];

export const Gallery = styled.div`
  flex: 0 0 100%;
  overflow-x: scroll;
  margin-left: -.5rem;
  margin-right: -.5rem;

  display: flex;
  
  @media (min-width: 48rem) {
    margin: 0;
  }
`;

const Photo = styled.img`
  width: auto;
  height: 25rem;
  
  @media (min-width: 48rem) {
    flex: none;
    height: 36rem;
  }
`;

export default function() {
  return (
    <Gallery>
      {galleryPhotos.map(function(photoObj, index) {
        return <Photo src={photoObj.src} key={index} />;
      })}
    </Gallery>
  );
}
