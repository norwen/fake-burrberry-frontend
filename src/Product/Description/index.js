import React, { Component } from 'react';
import styled from 'styled-components';
import icon from '../../assests/images/triangle.svg';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-basis: 100%;
  padding: 2rem 1rem;
  flex-wrap: wrap;
  
  @media screen and (min-width: 48rem) {
    padding: 1.5rem .5rem;
  
    border: none;
    border-top: 1px solid transparent;
  }

  ::after {
    position: absolute;
    content: url(${icon});
    right: 1rem;
    ${props => (props.isActive ? 'transform: rotate(180deg);' : '')};
  }
  @media screen and (min-width: 48rem) {
    ::after {
      display: none;
    }
  }
  
  @media screen and (min-width: 62rem) {
    padding: 0;
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  flex-basis: 100%;
  padding: 0;
  justify-content: space-between;
  align-items: baseline;
  
  border: none;
  background: transparent;
`;

export const Title = styled.h2`
  margin: 0;
  
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  text-transform: uppercase;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  
  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
`;

export const Content = styled.div`
  display: ${props => (props.isActive ? `block` : 'none')};
  margin-top: 2rem;
  font-size: .875rem;
  
  line-height: 1.5rem;
  
  @media screen and (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }

  p,
  ul,
  li {
    margin: 0;
    padding: 0;
    
    font-size: .875rem;
    line-height: 1.5rem;
  }
  
  li {
     list-style: none;
  }
`;

class Description extends Component {
  constructor(props) {
    super();
    this.state = {
      isActive: false,
    };
    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent() {
    this.setState((state, props) => ({
      isActive: !this.state.isActive,
    }));
  }

  render() {
    return (
      <Container isActive={this.state.isActive}>
        <ToggleButton type="button" onClick={this.toggleContent}>
          <Title>
            {this.props.title}
          </Title>
        </ToggleButton>
        <Content isActive={this.state.isActive}>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

export default Description;
