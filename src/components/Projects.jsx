import React from 'react'
import styled from "styled-components"
import Badge from "./Badge";
import {cardShadow, hoverEffect, themeColor} from "../utils";
import AvaterImage from "../assets/avatar.png"
import AvaterImage3 from "../assets/avatar3.png"



function Projects() {
  return (
    <YourProjects>
                <Due>
                Projects due for submission:
            </Due>
        <Project>
            <Avatar>
                <img src={AvaterImage} alt="" />
            </Avatar>
            
            <Detail>
                <Title>Backend development of restaurant website</Title>
                <SubTitle>1 day remaining</SubTitle>
                </Detail>
        </Project>

        <Project>
            <Avatar>
                <img src={AvaterImage3} alt="" />
            </Avatar>
            <Detail>
                <Title>Bakery Database Management</Title>
                <SubTitle>5 days remaining</SubTitle>
                </Detail>
        </Project>
    <AllProjects>See all projects </AllProjects>
    </YourProjects>
  )
}

const Due= styled.div`
color: red;
font-weight: bold;
`;
const YourProjects = styled.div`
height: 130%;
background-color: white;
margin: 0;

padding: 1rem;
border-radius: 1rem;
box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: max-content;
      margin-top: 1rem;
      width: 75%;
}
    
`;

const Project = styled.div`
display: flex;
align-items: center;
margin-bottom: 1.0rem;
margin-top: 1.5rem; `;

const Avatar = styled.div`
img{
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
}`;
const Detail = styled.div`
margin-left: 1rem;
`;
const Title = styled.h3`
font-weight: 500;
font-size: 17px;

    @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
}
    
`;

const SubTitle = styled.h5`
font-weight: 300;`;
const AllProjects = styled.h5`
text-align: end;
color: ${themeColor};
cursor: pointer;`;


export default Projects