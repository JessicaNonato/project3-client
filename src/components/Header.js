//Arrumar ícones brancos, arrumar CSS, font-family?


import React from 'react';
import { NavLink } from 'react-router-dom';
import {TiHeartFullOutline} from 'react-icons/ti';
import {FaUserCircle} from 'react-icons/fa';
import Navbar from './Navbar';
// import {BsBagFill} from 'react-icons/bs';
// import {GoSearch} from 'react-icons/go';
// import { GiHamburgerMenu } from 'react-icons/gi';
import  '../styles/header.css';
// //design
// import 'bootstrap/dist/css/bootstrap.min.css';
// // form and modal modules (antd library do react (UI))
// import {
//   Form,
//   Input,
//   Button,
//   Modal
// } from 'antd';
import 'antd/dist/antd.min.css';


const Header = () => {
    return (
        <div>
            <div className='header-black'>
                {/* <TiHeartFullOutline/> */}
                <div class="jumbotron text-center">
                <h3 style={{color:'white', fontSize: 50, paddingTop: 10}} className='header'>The Coeur</h3>         
                </div>
                <p>mudar a cor do header para black e icones brancos / colocar logotipo / alterar altura do header</p>
                <NavLink to={'/myfavorites'} style={{textDecoration: "none"}}>Favorites</NavLink>
                <Navbar/> 
                {/* <FaUserCircle/> */}
            </div>
        </div>
    )

}

export default Header;