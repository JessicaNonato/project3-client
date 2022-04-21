//Arrumar: CSS (travei, buguei)
import React from 'react';
import { Link as LinkReact } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa'; 
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  height: 150px;
  
`
const TitleFooter = styled.h1`
  color: white;
  font-size: 30px;
  font-family: 'Ms Madi';
  @import url('https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap');
`

const Title = styled.div`
  display: flex;
  padding: 10px;
`
// const LinkHome = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   margin-bottom: 80px;
//   align-items: center;
//   justify-content: center;
// `

const Link = styled(LinkReact)`
  padding-right: 20px;
  background-color: none;
  color: white;
  &:hover {
    color: white;
  }
`
const LinkFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: -35px;
  align-items: center;
  justify-content: center;
`
const Icons = styled.div`
  display: inline;
  

`
const Footer = () => {
  return (
    <FooterRow>
      <Title>
        <TitleFooter>The Coeur</TitleFooter>
      </Title>
      <Icons>
        <FaFacebookF style={{color: 'white'}} size={20}/>
        <FaTwitter style={{color: 'white'}} size={20}/>
        <FaInstagram style={{color:'white'}} size={20}/>
        <FaPinterest style={{color: 'white'}} size={20}/>
      </Icons>
      <LinkFooter>
        <Link to={'/'}>Privacy Policy</Link>
        <Link to={'/'}>Terms And Conditions</Link>
        <Link to={'/'}>About</Link>
        <Link to={'/'}>Shipping Info</Link>
        <Link to={'/'}>Returns/Exchanges</Link>
        <Link to={'/'}>Contact</Link>
      </LinkFooter>
    </FooterRow>
  )
}

export default Footer;