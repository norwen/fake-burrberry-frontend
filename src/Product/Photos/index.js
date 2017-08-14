import React from 'react';
import styled, { css } from 'styled-components';

const Photos = styled.section`
  display: none;
  
  @media (min-width: 62rem) {
    display: flex;
    flex-flow: center;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  padding: 0;
  vertical-align: middle;
  margin: 6rem 0 6rem 0;
  
  ${props => props.isRight && css`
    margin: 0 0 6rem 0;
    }
  `}
  
  ${props => props.isLeft && css`
    margin: 2rem 0 4rem 0;
    }
  `}
`;

export default function(props) {
  return (
    <Photos>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Photo isLeft src="images/bitmap_3.jpg" />
          </div>
          <div className="col-lg-4"><Photo src="images/bitmap.jpg" /></div>
          <div className="col-lg-4">
            <Photo isRight src="images/bitmap_2.jpg" />
          </div>
        </div>
      </div>
    </Photos>
  );
}
