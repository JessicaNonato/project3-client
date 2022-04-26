import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link} from 'react-router-dom'
import api from '../utils/api.utils'
import TheCoeur from './TheCoeur';
import Categories from  '../components/Categories';
import Subscribe from './Subscribe';
import '../styles/MyFavorites.css'


const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  
  const getFavorites = async () => {
    try {
        const favoritesPerfumes = await api.getAllFavorites();
        setFavorites( favoritesPerfumes.products );
        console.log(favoritesPerfumes.products)
    } catch (error) {
        console.log(error);
    }}

 
  
   useEffect(() => {
     getFavorites();
   }, []);


  return (
    <>
      <Header/>

      <TheCoeur/>

      
      
      <div className='page-fav'>

      <h1>My Favorites Here</h1>
      <div className="products-row-fav">
        {favorites.length ? favorites.map((favorite) => 
        <div key={favorite._id}>
          <Link className="perfume-link"to={`/product/${favorite._id}`}>
          <div className="item-fav">
            <figure  className="image-fav">
              <img
                src={favorite.img1}
                alt=""
              />
            </figure>
            <div className="info-fav">
              <h3 className="name-fav">{favorite.name}</h3>
            </div> 
          </div>
          </Link>
          {/* <button id={favorites._id}></button> */}
        </div>
        ) : ""}
      </div>
      </div>
      <Categories/>
       <Subscribe/>
      <Footer/>
    </>
  )
}

export default MyFavorites;