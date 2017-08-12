import React from 'react';
import styled from 'styled-components';
import PhotoSingle from '../PhotoSingle'

const Photos = styled.section`
  display: none;
  
  @media (min-width: 62rem) {
    display: flex;
    flex-flow: center;
    
    padding-bottom: 4rem;
  }
`;

const ImgLeft = PhotoSingle.extend`
  width: 100%;
  margin: 1rem 0 3rem 0;
`;

const ImgMid = PhotoSingle.extend`
  width: 100%;
  margin: 4rem 0 0 0;
`;

const ImgRight = PhotoSingle.extend`
  width: 100%;
  margin: 0 0 4rem 0;
`;

export default function (props) {
  return (
    <Photos>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"><ImgLeft src="images/bitmap_3.jpg"/></div>
          <div className="col-lg-4"><ImgMid src="images/bitmap.jpg"/></div>
          <div className="col-lg-4"><ImgRight src="images/bitmap_2.jpg"/></div>
        </div>
      </div>
    </Photos>
  );
}