import React from 'react';
import styled from 'styled-components';
import AccountBox from './accountBox';

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const Navbar = () => {
  return (
    <NavContainer>
        <AccountBox/>
    </NavContainer>
  )
}

export default Navbar;