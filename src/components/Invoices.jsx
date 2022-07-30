import React from 'react'
import styled from "styled-components"
import Badge from "./Badge";
import {cardShadow, hoverEffect, themeColor} from "../utils";
import AvaterImage from "../assets/avatar.jpeg"
import AvaterImage3 from "../assets/avatar3.png"


function Invoices() {
  return <InvoiceContainer>
    <CardContent>
        <Invoice>
            <Info>
                <Avatar>
                    <img src={AvaterImage3} alt="" />
                </Avatar>
                <TextContainer>
                <Title>Jane Doe</Title>
                <SubTitle>Front-End Developer</SubTitle>
                </TextContainer>
            </Info>
            <Container>
                <Button>Paid</Button>
                <Price>$ 1,200.87 </Price>
                 </Container>
        </Invoice>

        <Invoice>
            <Info>
                <Avatar>
                    <img src={AvaterImage} alt="" />
                </Avatar>
                <TextContainer>
                <Title>John Doe</Title>
                <SubTitle>Back-End Developer</SubTitle>
                </TextContainer>
            </Info>
            <Container>
                <Button>Late</Button>
                <Price>$ 6,500.87 </Price>
                 </Container>
        </Invoice>
    </CardContent>
    </InvoiceContainer>
}

const Button= styled.div`
padding: 0.3rem 1rem;
border-radius: 1rem;
font-weight: 500;
color: white;
background-color: ${themeColor};
cursor: pointer;
`;

const InvoiceContainer = styled.div`
width: 35rem;
border-radius: 1rem;
margin-top: 1rem;
background-color: white;
height: 100%;
box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
}
    
;
`;
const CardContent = styled.div`
    @media screen and (min-width: 320px) and (max-width: 1080px) {
     margin: 2rem 0;
}
    
`;

const Invoice = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin: 0.4rem;
padding-top: 0.6rem;

    @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
      gap: 1rem;
}

`;
const Info = styled.div`
display: flex;
align-items: center;
width: 50%;

    @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 100%;
      flex-direction: column;
      text-align: center;
}

`;
const Avatar = styled.div`
    img {
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 3.5rem;
    }
`;
const TextContainer = styled.div`
margin-left: 1rem;
`;
const Title = styled.div``;
const SubTitle = styled.div`
font-weight: 400;`;

const Container = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
align-items: center;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 100%;
      flex-direction: column;
      gap: 0.6rem;
}
    
`;

const Price = styled.div``;

export default Invoices