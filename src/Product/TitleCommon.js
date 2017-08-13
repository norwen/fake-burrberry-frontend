import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;

  border: 0;

  text-transform: uppercase;
  line-height: 1.1875rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

export default props => {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
};
