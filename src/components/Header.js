import React from 'react';
import { Link } from 'react-router-dom';
import {TiHeartFullOutline} from 'react-icons/ti';

import  '../styles/header.css';
import Navbar from './Navbar';


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
                <Navbar/>
                </div>
                
            </div>
        </div>
    )

}

export default Header;