import React from 'react'
import styled from 'styled-components';
import Badge from "./Badge"
import AvaterImage from "../assets/avatar.jpeg"
import {RiHomeLine, RiFileCopyLine} from "react-icons/ri"
import {FaWallet} from "react-icons/fa"
import {AiOutlinePieChart} from "react-icons/ri"
import {darkThemeColor, themeColor} from "../utils";

function Sidebar() {
  return (
    <Container>
    <ProfileContainer>
      <Avatar src={AvaterImage} />
      <Name>John Doe</Name>
        <Button>Admin</Button>
      </ProfileContainer>
      <LinksContainer>
      <Links>

      <Link>
      <RiHomeLine />
      <h5>Dashboard </h5>
      </Link>

      <Link>
      <RiFileCopyLine />
      <h5>Projects </h5>
      </Link>

      <Link>
      <FaWallet />
      <h5>Invoices </h5>
      </Link>

      <Link>
      <FaWallet />
      <h5>Reports </h5>
      </Link>

      </Links>
      <ContactContainer>
        <span>
          Having troubles>
        </span>
        <a href="#">Contact Us</a>
        </ContactContainer>
      </LinksContainer>
  </Container>
  );
}

const Button= styled.div`
padding: 0.3rem 1rem;
border-radius: 1rem;
font-weight: 500;
color: white;
background-color: ${themeColor};
cursor: pointer;
`;


const Container = styled.div`
width: 20%;
height:100% !important;
border-radius: 2rem;
background-color: #091322;
display: flex;
flex-direction: column;
align-items:center;
gap: 3rem;

@media screen and (min-width: 320px) and (max-width: 1080px) {
  width: 100%;
  height: max-content !important;
}

`
 

const ProfileContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`;

const Avatar = styled.img`
height: 7rem;
border-radius: radius 6rem; margin-top: 20%;

`;

const Name = styled.div`
color:white;
font: 1.5rem;
font-weight: 400;
margin: 0.8rem 0 0.5rem 0`;

const LinksContainer = styled.div`
background-color: ${darkThemeColor};
height: 100%;
width: 100%;
border-radius: 2rem;
`;

const Links = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
padding-top: 2rem;
height: 60%`;

const Link = styled.li`
margin-left: 25%;
margin-bottom: 2rem;
display: flex;
gap: 1rem;
color: white;
cursor: pointer;
h3{
  font-weight: 1.5rem;
}
svg{
  font-size: 1.1rem;
  margin-top: 3%;
}
`;

const ContactContainer = styled.div`
width: 60%;
background-color: #091322;
color: #c4c4c4;
height: 15%;
marin: auto auto;
border-radius: 1rem;
display: flex;
flex-direction: column;
padding: 1rem;
margin-left: 15%;
a{
    color: white;
    text-decoration: none;
}
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin-top: 2rem;
      align-items: center;
      text-align: center;
      margin-left: 15%;
      height: 10%;
}


`;

export default Sidebar