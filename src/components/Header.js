import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
import Login from './Login';


const Header = () => {
    return (
        <div>
            <div className='header-black'>
               <div>
               <Link className='link-favorites' to={'/myfavorites'}> <TiHeartFullOutline size={25}/></Link>
               </div>
                
                <div class="jumbotron text-center">
                <h3 style={{color:'white', fontSize: 40, paddingTop: 18}} className='header'>The Coeur</h3>         
                </div>
                <div className='login'>
                <Login/> <FaUserCircle size={20}/> 
                </div>
                
            </div>
        </div>
    )

}

export default Header;