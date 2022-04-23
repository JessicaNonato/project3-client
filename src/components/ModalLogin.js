import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api.utils';
import { 
    BoxContainer,
    HeaderContainer,
    QuestionText, 
    FormContainer, 
    Input, 
    ButtonSubmit, 
    InsideContainer, 
    ButtonCancel} from './accountBox/common';

    
const CustomStyles = {
    content: {
      top: '100px',
      left: '35%',
      right: 'auto',
    }
  }

Modal.setAppElement('#root');

const ModalLogin = ({ open, onClose, changeForm }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await api.login({email, password})
      navigate('/')
      console.log('sucess')
    } catch (error) {
      setMessage(error.message)
    }
    setEmail('')
    setPassword('')
  }

    return(
<Modal
      isOpen={open}
      onRequestClose={onClose}
      style={CustomStyles}
      >
      <BoxContainer>
      <HeaderContainer>Already have an account?</HeaderContainer>
        <InsideContainer>
          <FormContainer onSubmit={handleSubmit}>
            <Input 
              type='email' 
              id='email' 
              name='email' 
              value={email} 
              onChange= {(e) => setEmail(e.target.value)}
              placeholder='Email' 
              required/>
            <Input 
              type='password'
              id='password' 
              name='password' 
              value={password} 
              onChange= {(e) => setPassword(e.target.value)}
              placeholder='Password' 
              required/>
            <ButtonSubmit type="submit">Login</ButtonSubmit>
          <QuestionText>Forget your password?</QuestionText>
          </FormContainer>
          <QuestionText>Don't have an account?</QuestionText>
          <ButtonSubmit type="submit" onClick={changeForm} >Create an Account</ButtonSubmit>
          <ButtonCancel type='button'onClick={onClose}>Cancel</ButtonCancel>
        </InsideContainer>
      </BoxContainer>
      </Modal>
    )
}

export default ModalLogin;