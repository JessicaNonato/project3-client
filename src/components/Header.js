import React from 'react';
import { Link } from 'react-router-dom';
import {TiHeartFullOutline} from 'react-icons/ti';
import { BsHandbag } from  'react-icons/bs';
import  '../styles/Header.css';
import Navbar from './Navbar';
import SearchBar from './SearchBar';


const Header = () => {
 

    return (
      <>
        <div className="header-black">
          <div className='header-left'>
          <SearchBar/>
            <Link className="link-favorites" to={"/myfavorites"}>
              <TiHeartFullOutline size={25} style={{ color: "white" }} />
            </Link>
          </div>
          <div> 
            <Navbar />
            <Link to={'/cart'}>
              <BsHandbag style={{color:'white', marginLeft:'7px', cursor:'pointer'}} size={19}/>
            </Link>
          </div>
        </div>
      </>
    );

}

export default Header;