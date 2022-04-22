import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link} from 'react-router-dom'
import axios from 'axios';

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const keep = JSON.parse(localStorage.getItem("favorites"));  //keep no useEffect()
  
  const getPerfume = async (favPerfumes) => {
    const allPerfumesFavs = []; 

    for (const fav of favPerfumes) {
      const { data } = await axios.get(
        `url aqui=${fav}`
      )
      allPerfumesFavs.push(data.perfumes[0])
    }
    setFavorites(allPerfumesFavs)
  }
  
  
  useEffect(() => {
    getPerfume(keep);
  }, [keep]);

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