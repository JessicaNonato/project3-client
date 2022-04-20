import React, { useState , useContext } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {FaUserCircle} from 'react-icons/fa';
// import AccountBox from './accountBox';
// import Indexjsx from './accountBox/index';

import { FormContainer, Input, ButtonSubmit, ButtonToSignup } from './accountBox/common';
// import loginFormjsx from './accountBox/loginForm';
// import signupFormjsx from './accountBox/signupForm';
// import { AccountContext } from './accountBox/accountContext';

const CustomStyles = {
  content: {
    top: '100px',
    left: '35%',
    right: 'auto',
  }
}

// const NavContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `
const BoxContainer = styled.div`
    width: 400px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    background-color: #f0f1e8;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: 500;
`
const HiddedText = styled.p`
    font-size: 12px;
    text-align: center;
    color: #504e4e;
    font-weight: 300;
    text-decoration: none;
    margin-top: -25px;
    margin-bottom: 22px;
`



Modal.setAppElement('#root');

const Navbar = () => {
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false)
  const [modalIsOpenSignup, setModalIsOpenSignup] = useState(false)
  const [active, setActive] = useState('login')

  const handleOpenModalLogin = () => {
    setModalIsOpenLogin(true)
  }

  const handleCloseModalLogin = () => {
      setModalIsOpenLogin(false)
  }

  const handleOpenModalSignup = () => {
    setModalIsOpenSignup(true)
  }

  const handleCloseModalSignup = () => {
      setModalIsOpenSignup(false)
  }

  const goToSignup = () => {
    setTimeout(() => {
        setActive('signup')
    }, 400)        
}

  const goToLogin = () => {
      setTimeout(() => {
          setActive('login')
      }, 400)        
  }

  const contextValue = { goToLogin, goToSignup }

  // const { goToSignup} = useContext(AccountContext)


  return (
    <>
    <button type='text' style={{color: 'white'}} onClick={handleOpenModalLogin}>Login</button>
    <Modal
    isOpen={modalIsOpenLogin}
    onRequestClose={handleCloseModalLogin}
    style={CustomStyles}
    >
    <BoxContainer>
      <HeaderContainer>Already have an account?</HeaderContainer>
      <FormContainer>
          <Input type='email' placeholder='Email' required/>
          <Input type='password' placeholder='Password' required/>
      </FormContainer>
      <HiddedText href='#'>Forget your password?</HiddedText>
      <ButtonSubmit type="submit">Login</ButtonSubmit>
      <HiddedText href='#'>Don't have an account?</HiddedText>
      <ButtonToSignup type="submit">Create an Account</ButtonToSignup>
      <button type='text' style={{color: '#504e4e', width:100}} onClick={handleCloseModalLogin}>Cancel</button>

    </BoxContainer>
    </Modal>
    
    <button type='text' style={{background:'none', border:'none'}}onClick={handleOpenModalSignup}><FaUserCircle size={20}/></button>
    <Modal
    isOpen={modalIsOpenSignup}
    onRequestClose={handleCloseModalSignup}
    style={CustomStyles}
    >
    <BoxContainer>
    <HeaderContainer>Create an Account</HeaderContainer>
      <FormContainer>
          <Input type='text' placeholder='Name' required/>
          <Input type='email' placeholder='Email' required/>
          <Input type='password' placeholder='Password' required/>
          <Input type='password' placeholder='Confirm Password' required/>
      </FormContainer>
      <HiddedText href='#'>Already have an account?</HiddedText>
      <ButtonSubmit type="submit">Login</ButtonSubmit>
    </BoxContainer>
    <button type='text' style={{color: '#504e4e', width:100}}  onClick={handleCloseModalSignup}>Cancel</button>
    </Modal>
    </>
  )
}

export default Navbar;