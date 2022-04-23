import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link} from 'react-router-dom'
import api from '../utils/api.utils'

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
      <h1>My Favorites Here</h1>
      <div>
      <div>
        {favorites.length ? favorites.map((favorite) => 
        <div key={favorite._id}>
          <Link to={`/myfavorites/${favorite._id}`}>
          <div>
            <figure>
              <img
                src={favorite.img1}
                alt=""
              />
            </figure>
            <div>
              <h3>{favorite.name}</h3>
            </div> 
          </div>
          </Link>
          <button id={favorites._id}></button>
        </div>
        ) : ""}
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default MyFavorites;