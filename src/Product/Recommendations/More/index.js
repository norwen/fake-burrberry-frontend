import React from "react";
import styled from "styled-components";
import TitleCommon from "../../TitleCommon";

const More = styled.section`
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

export default function() {
  return (
    <More>
      <TitleCommon>MORE FOR YOU</TitleCommon>
      <Links>
        <Link href="#">Men’s Black Trench Coats</Link>
        <Link href="#">Men’s Short Trench Coats</Link>
        <Link href="#">Men’s Long Trench Coats</Link>
      </Links>
    </More>
  );
}
