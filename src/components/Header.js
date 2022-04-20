import React from 'react';
import { Link } from 'react-router-dom';
import {TiHeartFullOutline} from 'react-icons/ti';
import {FaUserCircle} from 'react-icons/fa';
import  '../styles/header.css';
import Signup from './Signup';
// //design
// import 'bootstrap/dist/css/bootstrap.min.css';
// // form and modal modules (antd library do react (UI))
// import {
//   Form,
//   Input,
//   Button,
//   Modal
// } from 'antd';

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
                <div>
                <Login/>
                <Signup/>
                <FaUserCircle size={20}/>
                </div>
                
            </div>
        </div>
    )

}

export default Header;