import React from 'react';
import { NavLink } from 'react-router-dom';
import {TiHeartFullOutline} from 'react-icons/ti';
import {FaUserCircle} from 'react-icons/fa';
import Navbar from './Navbar';
// import {BsBagFill} from 'react-icons/bs';
// import {GoSearch} from 'react-icons/go';
// import { GiHamburgerMenu } from 'react-icons/gi';
import  '../styles/Header.css';


const Header = () => {
    return (
        <div>
            <div className='header-black'>
                <TiHeartFullOutline/>
                <NavLink to={'/myfavorites'} style={{textDecoration: "none"}}>Favorites</NavLink>
                <Navbar/>     
                <p>mudar a cor do header para black e icones brancos / colocar logotipo</p>
                <FaUserCircle/>
            </div>
        </div>
    )

}

export default Header;