import React from 'react';
import { Link as LinkReact } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa'; 
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

const FooterColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: #000;
  height: 150px;
  flex-direction: column;
  
`
const TitleFooter = styled.h1`
  color: white;
  font-size: 25px;
  font-family: 'Ms Madi';
  @import url('https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap');
`

const Title = styled.div`
  display: flex;
  padding: 2px;
  margin-top: -30px;
  margin-bottom: -15px;
`
const Link = styled(LinkReact)`
  padding: 15px;
  background-color: none;
  color: white;
  &:hover {
    color: white;
  }
`
const Icons = styled.div`
  display: flex;
  flex-direction: row;
`
const LinkFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
`

const Footer = () => {
  return (
    <FooterColumn>
        <Title>
        <TitleFooter>The Coeur</TitleFooter>
      </Title>
      <Icons>
        <Link to={{ pathname: '//facebook.com/'}} target='_blank'><FaFacebookF style={{color: 'white'}} size={20}/></Link>
        <Link to={{ pathname: '//twitter.com/' }} target='_blank'><FaTwitter style={{color: 'white'}} size={20}/></Link>
        <Link to={{ pathname: '//instagram.com/' }} target='_blank'><FaInstagram style={{color:'white'}} size={20}/></Link>
        <Link to={{ pathname: '//pinterest.com' }} target='_blank'><FaPinterest style={{color: 'white'}} size={20}/></Link>
      </Icons>
      <LinkFooter>
        <Link to={'/'}>Privacy Policy</Link>
        <Link to={'/'}>Terms And Conditions</Link>
        <Link to={'/'}>About</Link>
        <Link to={'/'}>Shipping Info</Link>
        <Link to={'/'}>Returns/Exchanges</Link>
        <Link to={'/'}>Contact</Link>
      </LinkFooter> 
    </FooterColumn>
  )
}

export default Footer;