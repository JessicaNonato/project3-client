//Arrumar: CSS (travei, buguei), Icones do footer em branco, font-family?

import React from 'react';
import { NavLink as NavLinkReact } from 'react-router-dom';
import styled from 'styled-components';


const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  height: 160px;
  margin-top: 150px;    //alterar essa margem, era só para visualização na homepage a principio
`

const TitleFooter = styled.h1`
  color: white;
  font-size: 20px;
`

const NavLink = styled(NavLinkReact)`
  padding: 15px;
  background-color: none;
  color: white;
  /* .active {

  } */
`;

const LinkFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
`

const LinkHome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 80px;
  align-items: center;
  justify-content: center;
 
`






const Footer = () => {
  return (
    <FooterRow>
      <LinkHome>
        <TitleFooter>The Coeur</TitleFooter>
      </LinkHome>
      <LinkFooter>
      <NavLink to={'/#'}>Privacy Policy</NavLink>
      <NavLink to={'/#'}>Terms And Conditions</NavLink>
      <NavLink to={'/#'}>About</NavLink>
      <NavLink to={'shipping'}>Shipping Info</NavLink>
      <NavLink to={'/returns'}>Returns/Exchanges</NavLink>
      <NavLink to={'contact'}>Contact</NavLink>
      </LinkFooter>
    </FooterRow>
  )
}



export default Footer;