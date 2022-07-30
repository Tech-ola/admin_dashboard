 import React from 'react'
import styled from "styled-components"
import Badge from "./Badge";
import {cardShadow, hoverEffect, themeColor} from "../utils";
import AvaterImage from "../assets/avatar.jpeg"

function ProjectRecommendation() {
  return (
    <RecommendProject>
      <CardContent>
      <Detail> 
        <InfoContainer>
          <Avatar>
            <img src={AvaterImage} alt="" />
          </Avatar>
        </InfoContainer>

      </Detail>
      <Title>
      Need a designer for branding essentials
      </Title>
      <ProjectInfo>
Looking for a talented brand designer to creat all the branding materials for my new startup.
      </ProjectInfo>
      <PriceContainer>
     <Price>$8700/month</Price>
     	<Button>Full Time</Button>
      </PriceContainer>

      </CardContent>
          </RecommendProject>
  )
}

const Button= styled.div`
padding: 0.3rem 1rem;
border-radius: 1rem;
font-weight: 500;
color: white;
background-color: ${themeColor};
cursor: pointer;
`;

const RecommendProject= styled.div`
border-radius: 1rem;
margin-top: 3%;
height: 130%;
padding: 1rem;
background-color: white;
width: 100%;

box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
&:hover{
	box-shadow: ${hoverEffect};
}
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 80%;
      height: max-content;
      margin: 2rem 0;
}

`;
const CardContent= styled.div`
margin: 0.4rem;
`;
const Detail= styled.div`
display: flex;
justify-content: space-around;
align-items: center;

    @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.2rem;
      margin-bottom: 1rem;
}

`;
const InfoContainer= styled.div``;
const Avatar= styled.div`
	margin-right: 1rem;
	img{
	height: 5rem;
	border-radius: 5rem;
	}
`;
const Info= styled.div``;
const InfoName= styled.h3`
font-weight: 500;
`;
const InfoUpdate= styled.h5`
font-weight: 300;
`;
const Title= styled.div``;

const ProjectInfo= styled.p`
margin: 0;
padding: 0;
font-size: 0.9rem;
color: #3b3b3b;
margin-bottom: 0.5rem;
`;
const PriceContainer= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0.1rem;
padding: 0.5rem 1rem;
border-radius: 1rem;
background-color: rgba(146,166,255,0.3);

    @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
      gap: 0.4rem;
}

`;
const Price= styled.div``;

export default ProjectRecommendation