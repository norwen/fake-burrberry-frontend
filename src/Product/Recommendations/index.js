import React from 'react';
import styled from 'styled-components';
import Card from "./Card";
import TitleCommon from "../TitleCommon";
import RecommendationsMore from "./RecommendationsMore/index";

const recommendations = [
  {
    photoUrl: 'images/bitmap-6.jpg',
    name: 'Emroided Hooded',
    nameFull: 'Content For Three Lines',
    price: '27000'
  },
  {
    photoUrl: 'images/bitmap-7.jpg',
    name: 'Relaxed Fit Stretch Jeans',
    nameFull: 'Content For Three Lines',
    price: '22500'
  },
  {
    photoUrl: 'images/bitmap-8.jpg',
    name: 'Leather and House Check',
    nameFull: 'Content For Three Lines',
    price: '120000'
  },
  {
    photoUrl: 'images/bitmap-9.jpg',
    name: 'Leather Wingtip Check',
    nameFull: 'Content For Three Lines',
    price: '46000'
  }
];

const Recommendations = styled.section`
  padding: 3rem .5rem 0;
  
  @media (min-width: 48rem) {
    padding: 1.5rem 0 0 0;
  }
  
  @media (min-width: 62rem) {
    padding: 4rem 0;
  }
`;

const Head = styled.div`
   @media (min-width: 62rem) {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export default function () {
  return (
    <Recommendations>
      <Head>
        <TitleCommon title="WE RECOMMEND"/>
      </Head>
      <div className="row">
        {recommendations.map((recomm, index) => {
          return <div className="col-xs-6 col-md-3">
            <Card photoUrl={recomm.photoUrl} name={recomm.name} price={recomm.price} key={index}/>
          </div>
        })}
      </div>
      <RecommendationsMore/>
    </Recommendations>
  )
}