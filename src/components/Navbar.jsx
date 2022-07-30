import React from 'react'
import styled from "styled-components"
import {FiSearch} from "react-icons/fi"
import {themeColor} from "../utils";

function Navbar() {
  return <NavbarContainer>
    <Text>
        Good Morning
        <span> John Doe </span>
    </Text>
    <InputContainer>
        <Icon>
            <FiSearch />
        </Icon>
        <Input type="text" placeholder="Search for projects" />
    </InputContainer>
  </NavbarContainer>
}

const NavbarContainer = styled.nav`
display: flex;
justify-content: space-between;
alin-items: center;
height: 10%;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-top: 5rem;
}
`;
const Text = styled.h1`
    font-size: 35px;
    text-shadow: 1px 1px 1px black;
span {
    font-weight: 500;
    color: ${themeColor};
}
@media screen and (min-width: 320px) and (max-width: 1080px) {
 margin-top: 1rem;
}
`;
const InputContainer = styled.div`
display: flex;
`;
const Icon = styled.div`
height: 3rem;
width: 3rem;
background-color: #dce4ff;
display: flex;
justify-content: center;
align-items: center;
border-top-left-radius: 0.5rem;
border-bottom-left-radius: 0.5rem;
svg{
color: #555555;
}
`;
const Input = styled.input`
border: none;
height: 57%;
background-color: #dce4ff;
border-top-right-radius: 0.5rem;
border-bottom-right-radius: 0.5rem;
&:focus {
    border:none;
    outline: none;
}

@media screen and (min-width: 320px) and (max-width: 1080px) {
 height: 100%;
 flex-direction: column;


}
`;

export default Navbar