import React from 'react';
import styled from 'styled-components';
import TitleCommon from "../../TitleCommon";

const RecommendationsMore = styled.section`
  display: flex;
  flex-flow: column;
  padding-top: 1rem;
  margin-bottom: 3rem;

 @media (min-width: 48rem) {
     display: none;
 }
`;

const Links = styled.nav``;

const Link = styled.a`
  display: block;
  margin-bottom: 1rem;

  font-size: .875rem;
  line-height: 17px;
  font-weight: 400;
  text-decoration: none;
  color: #171717;
  font-style: italic;
  font-family: Lora, Helvetica, Arial, serif;
`;

export default function () {
  const links = [
    {url: '#', name: 'Men’s Black Trench Coats'},
    {url: '#', name: 'Men’s Short Trench Coats'},
    {url: '#', name: 'Men’s Long Trench Coats'}
  ];

  return (
    <RecommendationsMore>
      <TitleCommon title="MORE FOR YOU"/>
      <Links>
        {
          links.map(function (link, index) {
            return <Link href={link.url} key={index}>{link.name}</Link>
          })
        }
      </Links>
    </RecommendationsMore>
  )
}

