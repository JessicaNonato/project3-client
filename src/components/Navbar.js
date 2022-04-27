import React, { useState } from "react";
import Modal from "react-modal";
import ModalLogin from "./ModalLogin";
import ModalSignup from "./ModalSignup";
import {FaUserCircle} from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  const [logout, setLogout] = useState(false);
  

  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.clear()
    setLogout(true);
    navigate('/')
    console.log('feito o logout')
  }

  
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
      > <FaUserCircle size={20}/>
        Signup 
      </ButtonNavbar>
      <ButtonNavbar
       type="button"
       onClick={handleLogout}>
        Logout
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
