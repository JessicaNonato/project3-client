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
      top: '50%',
      left: '50%',
      transform:'translate(-50%, -50%)',
      maxWidth: '337px', 
      minWidth: '340px',
      width: '100%',
      height: '475px',
      display:'flex'
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
      await api.login({email, password})
      navigate('/')
      setMessage('Welcome!')
      onClose()
      console.log('success login')
    } catch (error) {
      console.error(error)
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