import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: none;
  
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  
  @media screen and (min-width: 48rem) {
    display: block;
    margin-top: 3rem;
  }

  @media screen and (min-width: 62rem) {
    margin-top: 4rem;
  }
`;

const Content = styled.div`
 @media (min-width: 62rem) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
 }
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Header = styled.h2`
   margin-bottom: 1rem;

   font-weight: 500;
   font-size: 1rem;
   line-height: 19px;
   color: #171717;
`;

const Paragraph = styled.div`
  display: block;
  margin-bottom: 1.5rem;
  
  :last-child {
    margin: 0;
  }
`;

const Title = styled.h3`
  height: .825rem;
  margin: 0 0 .25rem;

  font-size: .75rem;
  line-height: .825rem;
`;

const Text = styled.p`
  font-size: .75rem;
  line-height: 1rem;
`;

export default () => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6">
          <Img src="images/bitmap_delivery.jpg"
               srcSet="images/bitmap_delivery@2x.jpg 2x,images/bitmap_delivery@3x.jpg 3x" alt="Delivery info"/>
        </div>

        <div className="col-md-6 col-lg-4 col-lg-offset-1">
          <Content>
            <Header>
              DELIVERY
            </Header>

            <Paragraph>
              <Title>Free Next Day Delivery</Title>
              <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>
            </Paragraph>

            <Paragraph>
              <Title>Collect-in-Store</Title>
              <Text>Order online today and pick up your items in store as early as tomorrow</Text>
            </Paragraph>

            <Paragraph>
              <Title>Free Returns</Title>
              <Text>Enjoy free returns on your order</Text>
            </Paragraph>

            <Paragraph>
              <Title>Free Gift Packaging</Title>
              <Text>Discover our gift packaging, a gold lined box tied with a coloured ribbon</Text>
            </Paragraph>
          </Content>

        </div>
      </div>
    </Container>
  )
}


