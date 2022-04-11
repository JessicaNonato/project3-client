import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {TiHeartFullOutline} from 'react-icons/ti';
import {FaUserCircle} from 'react-icons/fa';
import {BsBagFill} from 'react-icons/bs';
import {GoSearch} from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import  '../styles/header.css';


const Header = () => {
    return(
        <div>
    <div className='header-black'>
        <TiHeartFullOutline/>
        <p>Favorites</p>
        <p>Login</p>
        <FaUserCircle/>

    </div>
    </div>
    )

}

export default Header;