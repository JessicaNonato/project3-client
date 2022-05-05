import React, { useState, useMemo, useEffect } from "react";
import Modal from "react-modal";
import ModalLogin from "./ModalLogin";
import ModalSignup from "./ModalSignup";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { BsHandbag } from  'react-icons/bs';
// import api from '../utils/api.utils';





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
  padding: 1px 5px;
  position: relative;
  margin-left: 13px;
  margin-right: 10px;

`
const Auth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`

const Navbar = ({getCart, userCart}) => {
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const [modalIsOpenSignup, setModalIsOpenSignup] = useState(false);
  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState()
  

  const user = localStorage.getItem("user");
  
  const getUserName = () => {
    const name = JSON.parse(user).name;
    setUserName(name)
  }
  
      
    
  useEffect(() => {
    if (user) {
      getUserName()
    }
    
  }, [user]);
  

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

 

  // const somarNoBadge = useMemo(()=> userCart.map(item => item.quantity).reduce((acc, curr) => acc + curr, 0), [userCart]);

  
  return (
    <>
      {user ? (<Auth>
        <p style={{margin:0}}>Olá, {userName}</p>
        <ButtonNavbar type="button" onClick={handleLogout}>
          Logout
        </ButtonNavbar>
         <Link to={'/cart'}>
         <BsHandbag style={{color:'white', marginLeft:'0px', cursor:'pointer', position:'absolute', marginTop: '0px'}} size={23}/>
         {/* <BadgeSpan>{somarNoBadge}</BadgeSpan> */}
        </Link>
        </Auth>
        ) : (
        <>
        <div style={{display:'flex', alignContent:'center', alignItems:'center'}}>
        <FaUserCircle size={20} />
        <ButtonNavbar type="button" onClick={handleOpenModalLogin}>
            {" "}
            Login
          </ButtonNavbar>
        </div>
          {/* <ButtonNavbar type="button" onClick={handleOpenModalSignup}>
            {" "}
            
            Signup
          </ButtonNavbar> */}
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
