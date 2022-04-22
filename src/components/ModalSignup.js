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
// import {FaUserCircle} from 'react-icons/fa';


    
const CustomStyles = {
    content: {
      top: '100px',
      left: '35%',
      right: 'auto',
    }
  }

Modal.setAppElement('#root');

const ModalSignup = ({ open, onClose, changeForm }) => {
    return(
<Modal
      isOpen={open}
      onRequestClose={onClose}
      style={CustomStyles}
      >
      
      <BoxContainer>
      <HeaderContainer>Create an Account</HeaderContainer>
      <InsideContainer>
        <div>
        <FormContainer>
            <Input type='text' placeholder='Name' required/>
            <Input type='email' placeholder='Email' required/>
            <Input type='password' placeholder='Password' required/>
            <Input type='password' placeholder='Confirm Password' required/>
            <HiddedText href='#'>Already have an account?</HiddedText>
            <ButtonSubmit type="submit" onClick={changeForm}>Login</ButtonSubmit>
        </FormContainer>
        
        <button type='text' style={{color: '#504e4e', width:100}}  onClick={onClose}>Cancel</button>
        </div>
        </InsideContainer>
      </BoxContainer>
      </Modal>
    )
}

export default ModalSignup;