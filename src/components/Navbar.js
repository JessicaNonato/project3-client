import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ModalLogin from "./ModalLogin";
import ModalSignup from "./ModalSignup";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { BsHandbag } from  'react-icons/bs';
import api from '../utils/api.utils';




Modal.setAppElement("#root");

const ButtonNavbar = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const BadgeSpan = styled.span`
  background-color: red;
  border-radius: 50%;
  font-size: 12px;
  color: white;
  padding: 2px 7px;
`

const Navbar = () => {
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const [modalIsOpenSignup, setModalIsOpenSignup] = useState(false);
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  const user = localStorage.getItem("token", "name");

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
    localStorage.clear();
    navigate("/");
    console.log("feito o logout");
  };


  
  const getCartUser = async () => {
    try {
        const cartData = await api.getCart();
        setProducts(cartData.cart.products);
        getCartUser();
        console.log(cartData.cart.products)

    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
  if (token) {
    getCartUser();
  }
  
}, []);

  return (
    <>
      {user ? (<>
        <ButtonNavbar type="button" onClick={handleLogout}>
          Logout
        </ButtonNavbar>
         <Link to={'/cart'}>
         <BsHandbag style={{color:'white', marginLeft:'7px', cursor:'pointer'}} size={23}/>
         <BadgeSpan>{products.length}</BadgeSpan>
        </Link>
        </>
        ) : (
        <>
          <ButtonNavbar type="button" onClick={handleOpenModalLogin}>
            {" "}
            Login
          </ButtonNavbar>
          <ButtonNavbar type="button" onClick={handleOpenModalSignup}>
            {" "}
            <FaUserCircle size={20} />
            Signup
          </ButtonNavbar>
        </>
      )}

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
