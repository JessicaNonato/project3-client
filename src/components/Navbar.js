import React, { useState, useMemo } from "react";
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
  padding: 1px 5px;
  position: relative;
  margin-left: 15px;

`
const Auth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`

const Navbar = (cart) => {
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const [modalIsOpenSignup, setModalIsOpenSignup] = useState(false);
  const [products, setProducts] = useState([]);
  

  const user = localStorage.getItem("user");
  const name = JSON.parse(user).name;
 

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


  
//   const getCartUser = async () => {
//     try {
//         const cartData = await api.getCart();
//         setProducts(cartData.cart.products);
//         console.log(cartData.cart.products)

//     } catch (error) {
//         console.log(error);
//     }
// }

// useEffect(() => {
//   if (user) {
//     getCartUser();
//   }  
// }, [user]);
console.log(cart)

// const somarNoBadge = useMemo(()=> cart.map(item => item.productId.price * item.quantity).reduce((acc, curr) => acc + curr, 0), [products]);
    


  return (
    <>
      {user ? (<Auth>
        <p style={{margin:0, paddingRight: 15}}>Olá, {name}</p>
        <ButtonNavbar type="button" onClick={handleLogout}>
          Logout
        </ButtonNavbar>
         <Link to={'/cart'}>
         <BsHandbag style={{color:'white', marginLeft:'0px', cursor:'pointer', position:'absolute', marginTop: '0px'}} size={23}/>
         <BadgeSpan>{products.length}</BadgeSpan>
        </Link>
        </Auth>
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
