import React, { useState } from "react";
import Modal from "react-modal";
import api from "../utils/api.utils";
import {
  BoxContainer,
  HeaderContainer,
  QuestionText,
  FormContainer,
  Input,
  ButtonSubmit,
  InsideContainer,
  ButtonCancel
} from "./accountBox/common";


const CustomStyles = {
  content: {
    top: '50%',
      left: '50%',
      transform:'translate(-50%, -50%)',
      maxWidth: '337px',  
      minWidth: '340px',
      width: '100%',
      height: '475px',
      display:'flex'
  },
};

Modal.setAppElement("#root");

const ModalSignup = ({ open, onClose, changeForm }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  // const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user =  await api.register({name, email, password})
      onClose()
      // setMessage('Account created successfully!')
      console.log('account created')
    } catch (error) {
      console.error(error)
    }
    setEmail('')
    setPassword('')
    setName('')
  }

  return (
    <Modal isOpen={open} onRequestClose={onClose} style={CustomStyles}>
      <BoxContainer>
        <HeaderContainer>Create an Account</HeaderContainer>
        <InsideContainer>
          <FormContainer onSubmit={handleSubmit}>
            <Input 
              type="text" 
              placeholder="Name" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required />
            <Input 
              type="email" 
              placeholder="Email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required />
            <Input 
              type="password" 
              placeholder="Password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required />
            {/* <Input 
              type="password" 
              placeholder="Confirm Password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required /> */}
            <ButtonSubmit type="submit">Signup</ButtonSubmit>
            <QuestionText>Already have an account?</QuestionText>
            <ButtonSubmit type="submit" onClick={changeForm}>Login</ButtonSubmit>
          </FormContainer>

          <ButtonCancel type='button'
           
            onClick={onClose}
          >
            Cancel
          </ButtonCancel>
        </InsideContainer>
      </BoxContainer>
    </Modal>
  );
};

export default ModalSignup;
