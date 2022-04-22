import React, { useState } from "react";
import Modal from "react-modal";
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
    top: "100px",
    left: "35%",
    right: "auto",
  },
};

Modal.setAppElement("#root");

const ModalSignup = ({ open, onClose, changeForm }) => {
  return (
    <Modal isOpen={open} onRequestClose={onClose} style={CustomStyles}>
      <BoxContainer>
        <HeaderContainer>Create an Account</HeaderContainer>
        <InsideContainer>
          <FormContainer>
            <Input type="text" placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Input type="password" placeholder="Confirm Password" required />
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
