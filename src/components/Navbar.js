import React, { useState } from "react";
import Modal from "react-modal";
import ModalLogin from "./ModalLogin";
import ModalSignup from "./ModalSignup";
import {FaUserCircle} from 'react-icons/fa';
import styled from 'styled-components';

Modal.setAppElement("#root");

const ButtonNavbar = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
`

const Navbar = () => {
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const [modalIsOpenSignup, setModalIsOpenSignup] = useState(false);
  // const [user, setUser] = useState(localStorage.getItem('Name'));

  const handleOpenModalLogin = () => {
    setModalIsOpenLogin(true);
  };

  const handleCloseModalLogin = () => {
    setModalIsOpenLogin(false);
  };

  const handleOpenModalSignup = () => {
    setModalIsOpenSignup(true);
  };

  const handleCloseModalSignup = () => {
    setModalIsOpenSignup(false);
  };

  const goToSignup = () => {
    handleCloseModalLogin();
    handleOpenModalSignup();
  };

  const goToLogin = () => {
    handleCloseModalSignup();
    handleOpenModalLogin();
  };

  return (
    <>
      <ButtonNavbar
        type="button"
        onClick={handleOpenModalLogin}
      > Login
      </ButtonNavbar>
      <ButtonNavbar
        type="button"
        onClick={handleOpenModalSignup}
      ><FaUserCircle size={20}/>  Signup
      </ButtonNavbar>
      <ModalLogin
        open={modalIsOpenLogin}
        onClose={handleCloseModalLogin}
        changeForm={goToSignup}
      />
      <ModalSignup
        open={modalIsOpenSignup}
        onClose={handleCloseModalSignup}
        changeForm={goToLogin}
      />
    </>
  );
};

export default Navbar;
