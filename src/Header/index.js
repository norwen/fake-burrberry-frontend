import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 0.75rem 0;
  
  border-bottom: 1px solid #c6c6c6;
  
  @media (min-width: 48rem) {
    padding: 1.25rem 0;
  }
`;
export default () => {
  return (
    <Header>
      <a href="#"><img src={process.env.PUBLIC_URL + 'images/logo.svg'} alt="Burberry logo"/></a>
    </Header>
  )
}

