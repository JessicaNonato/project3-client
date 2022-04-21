import React, { useState } from 'react';
import Modal from 'react-modal';
// import {FaUserCircle} from 'react-icons/fa';
import { 
  BoxContainer,
  HeaderContainer,
  HiddedText, 
  FormContainer, 
  Input, 
  ButtonSubmit, 
  ButtonToSignup,
  InsideContainer } from './accountBox/common';
import { AccountContext } from "./accountBox/accountContext";

const CustomStyles = {
  content: {
    top: '100px',
    left: '35%',
    right: 'auto',
  }
}


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

  return (
    <>
      <button type='text' style={{background:'none', border:'none'}} onClick={handleOpenModalLogin}>Login</button>
      {active === 'login' &&
      
      <Modal
      isOpen={modalIsOpenLogin}
      onRequestClose={handleCloseModalLogin}
      style={CustomStyles}
      >
      <AccountContext.Provider value={contextValue}>
      <BoxContainer>
      {active === 'login' && <HeaderContainer>Already have an account?</HeaderContainer>}
        <InsideContainer>
          <div>
          <FormContainer>
              <Input type='email' placeholder='Email' required/>
              <Input type='password' placeholder='Password' required/>
          </FormContainer>
          <HiddedText href='#'>Forget your password?</HiddedText>
          <ButtonSubmit type="submit">Login</ButtonSubmit>
          <HiddedText href='#'>Don't have an account?</HiddedText>
          <ButtonToSignup type="submit" onClick={goToSignup} >Create an Account</ButtonToSignup>
          <button type='text' style={{color: '#504e4e', width:100}} onClick={handleCloseModalLogin}>Cancel</button>
          </div>
        </InsideContainer>
      </BoxContainer>
      </AccountContext.Provider>
      </Modal>}
      
      {/* <FaUserCircle size={20}/> */}

      <button type='text' style={{background:'none', border:'none'}}onClick={handleOpenModalSignup}>Signup</button>
      {active === 'signup' && 
      <Modal
      isOpen={modalIsOpenSignup}
      onRequestClose={handleCloseModalSignup}
      style={CustomStyles}
      >
      <AccountContext.Provider value={contextValue}>
      <BoxContainer>
      {active === 'signup' && <HeaderContainer>Create an Account</HeaderContainer>}
      <InsideContainer>
        <div>
        <FormContainer>
            <Input type='text' placeholder='Name' required/>
            <Input type='email' placeholder='Email' required/>
            <Input type='password' placeholder='Password' required/>
            <Input type='password' placeholder='Confirm Password' required/>
        </FormContainer>
        <HiddedText href='#'>Already have an account?</HiddedText>
        <ButtonSubmit type="submit" onClick={goToLogin}>Login</ButtonSubmit>
        <button type='text' style={{color: '#504e4e', width:100}}  onClick={handleCloseModalSignup}>Cancel</button>
        </div>
        </InsideContainer>
      </BoxContainer>
      </AccountContext.Provider>
      </Modal>}
    </>
  )
}

export default Navbar;