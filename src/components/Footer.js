import React from 'react';
import styled from 'styled-components';

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  height: 100px;
  margin: 0;
`


const Footer = () => {
  return (
    <FooterRow>
      <h1>Esse Footer em todas as páginas</h1>
    </FooterRow>
  )
}

export default Footer;