import { Link } from 'react-router-dom';
import {TiHeartFullOutline} from 'react-icons/ti';
import  '../styles/Header.css';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import {React} from "react";


const Header = ({getCart, userCart}) => {
 

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
            <Navbar getCart={getCart}  userCart={userCart} />
           
          </div>
          
        </div>
      </>
    );

}

export default Header;