import React from 'react';
import styled from 'styled-components';

const ButtonColor = styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  
  font-size: 0;
  
  border-radius: 50%;
  border: ${props => (props.isActive ? '1px solid #232122' : '1px solid transparent')};
  background-color: ${props => props.color};
`;

export default function (props) {
  return (
    <ButtonColor color={props.color} isActive={props.isActive} type="button">
      Select {props.name} color
    </ButtonColor>
  )
}