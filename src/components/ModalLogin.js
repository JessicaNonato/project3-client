import React, { useState } from 'react';
import Modal from 'react-modal';
import { 
    BoxContainer,
    HeaderContainer,
    HiddedText, 
    FormContainer, 
    Input, 
    ButtonSubmit, 
    ButtonToSignup,
    InsideContainer } from './accountBox/common';

    
const CustomStyles = {
    content: {
      top: '100px',
      left: '35%',
      right: 'auto',
    }
  }

Modal.setAppElement('#root');

const ModalLogin = ({ open, onClose, changeForm }) => {
    return(
<Modal
      isOpen={open}
      onRequestClose={onClose}
      style={CustomStyles}
      >
      <BoxContainer>
      <HeaderContainer>Already have an account?</HeaderContainer>
        <InsideContainer>
          <div>
          <FormContainer>
            <Input type='email' placeholder='Email' required/>
            <Input type='password' placeholder='Password' required/>
            <HiddedText href='#'>Forget your password?</HiddedText>
            <ButtonSubmit type="submit">Login</ButtonSubmit>
          </FormContainer>
          
          <HiddedText href='#'>Don't have an account?</HiddedText>
          <ButtonToSignup type="submit" onClick={changeForm} >Create an Account</ButtonToSignup>
          <button type='text' style={{color: '#504e4e', width:100}} onClick={onClose}>Cancel</button>
          </div>
        </InsideContainer>
      </BoxContainer>
      
      </Modal>
    )
}

export default ModalLogin;