import React from 'react';
import styled from 'styled-components';

const Navs = styled.section`
  display: none;

  @media (min-width: 48rem) {
      display: block;
      margin-bottom: .75rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: column;
`;

const Header = styled.h3`
  margin-bottom: 1rem;

  font-size: .75rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
`;
const Link = styled.a`
  margin: 0 0 .75rem;

  font-size: .75rem;
  line-height: 1.33333333;
  color: #999999;
  text-decoration: none;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  
  :last-child {
    margin: 0;
  }
`;

export default function() {
  return (
    <Navs>
      <div className="row">
        <div className="col-md-3">
          <Header>
            CUSTOMER SERVICE
          </Header>
          <Nav>
            <Link href="#">
              Contact Us
            </Link>
            <Link href="#">
              Payment
            </Link>
            <Link href="#">
              Shipping
            </Link>
            <Link href="#">
              Returns
            </Link>
            <Link href="#">
              Faqs
            </Link>
            <Link href="#">
              Live Chat
            </Link>
            <Link href="#">
              The Burberry App
            </Link>
            <Link href="#">
              Store Locator
            </Link>
          </Nav>
        </div>

        <div className="col-md-3">
          <Header>
            OUR COMPANY
          </Header>
          <Nav>
            <Link href="#">
              Our History
            </Link>
            <Link href="#">
              Burberry Group Pic
            </Link>
            <Link href="#">
              Careers
            </Link>
            <Link href="#">
              Corporate Responsibility
            </Link>
            <Link href="#">
              Site Map
            </Link>
          </Nav>
        </div>

        <div className="col-md-3">
          <Header>
            LEGAL & COOKIES
          </Header>
          <Nav>
            <Link href="#">
              Terms & Conditions
            </Link>
            <Link href="#">
              Privacy Policy
            </Link>
            <Link href="#">
              Cookie Policy
            </Link>
            <Link href="#">
              Accessibility Statement
            </Link>
            <Link href="#">
              Japan Only - SCTL indications
            </Link>
          </Nav>
        </div>
      </div>
    </Navs>
  );
}
