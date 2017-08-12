import styled from 'styled-components';

const BlockDelimiter = styled.hr`
  margin: 0 -.5rem;

  border: 0;
  border-top: solid 1px #c6c6c6;
  
  @media (min-width: 48rem) {
    display: none;
  }
`;

export default BlockDelimiter;

