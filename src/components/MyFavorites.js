import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link} from 'react-router-dom'
import api from '../utils/api.utils'
import TheCoeur from './TheCoeur';
import Categories from  '../components/Categories';
import Subscribe from './Subscribe';
import '../styles/MyFavorites.css'
import banner from '../midia/Favorites1.png';
import { Ripple } from 'react-spinners-css';


const MyFavorites = ({getCart, userCart}) => {
  const [favorites, setFavorites] = useState([]);
  const [inCart, setInCart] = useState(false);
  const [cart, setCart] = useState(false);

  
  const getFavorites = async () => {
    try {
        const favoritesPerfumes = await api.getAllFavorites();
        setFavorites( favoritesPerfumes.products );
        console.log(favoritesPerfumes.products)
    } catch (error) {
        console.log(error);
    }}

    const addToCart = async (id) => {
      try {
        const creatCartOnApi = await api.createCart(id);
        setInCart(true);
        getCart();
        setCart(true);
      } catch (error) {
        console.log(error);
      }
    };
  
   useEffect(() => {
     getFavorites();
   }, []);


  return (
    <>
      <Header userCart={userCart} getCart={getCart}/>

      <TheCoeur/>

      
      
      <div className='page-fav'>

      <img className='img-banner' src={banner} alt=''/>
      <div className="products-row-fav">
        {favorites.length ? favorites.map((item) => { const {_id, name, img1, price} = item; return(
                <div className="item-page">
                <Link key={_id} className="perfume-link" to={`/product/${_id}`}>
                 <div  >
                 <div className="image-page">
                     <img src={img1} alt={name} />
                 </div>
                 
                 <div className="info-page">
                 <span className="name-page">{name}</span>
                 <span className="price-page">R${price}</span>
                 </div>
                 </div>
                 
                 </Link>
                 <button
                  className="adicionar"
                  onClick={() =>
                    addToCart(_id)
                  }
                >
                  ADICIONAR AO CARRINHO
                 </button>
                 
                 </div>
    
            )}): <Ripple color="#e8b7c8"/>}
      </div>
      </div>
      <Categories/>
       <Subscribe/>
      <Footer/>
    </>
  )
}

export default MyFavorites;