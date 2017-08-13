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

const Link = styled.a``;

const Logo = styled.img`
  @media screen and (min-width: 48rem) {
    height: 1rem;
  }
`;
export default () => {
  return (
    <Header>
      <Link href="#">
        <Logo src={process.env.PUBLIC_URL + 'images/logo.svg'} alt="Burberry logo"/>
      </Link>
    </Header>
  )
}

