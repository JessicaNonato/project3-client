//Arrumar: CSS (travei, buguei), Icones do footer em branco, font-family?

import React from 'react';
import { Link as LinkReact } from 'react-router-dom';
import styled from 'styled-components';


const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  height: 150px;
  
`

// const TitleFooter = styled.h1`
//   color: white;
//   font-size: 20px;
// `

const Link = styled(LinkReact)`
  padding: 15px;
  background-color: none;
  color: white;
  &:hover {
    color: white;
  }
`

const LinkFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
`

// const LinkHome = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   margin-bottom: 80px;
//   align-items: center;
//   justify-content: center;
 
// `
const Footer = () => {
  return (
    <FooterRow>
     
        {/* <TitleFooter>The Coeur</TitleFooter> */}
      
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