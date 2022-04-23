import {React, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import api from '../utils/api.utils';
import Footer from "./Footer";
import Header from "./Header";
import Subscribe from "./Subscribe";
import CarouselProducts from "./CarouselProducts"
import {TiHeartFullOutline} from 'react-icons/ti';
import {TiHeartOutline} from 'react-icons/ti';
import '../styles/productCard.css'


const ProductCard = ({getCart,getFavorites, favorites}) => {
    const { id } = useParams();
    const [perfume, setPerfume] = useState([]);
    const [toggleImg, setToggleImg] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    
    const getPerfume = async () => {
        try {
            const perfumesApi = await api.getOneProduct(id);
            setPerfume( perfumesApi );
            console.log(perfumesApi)
    
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPerfume();
      }, [id]);
    

    const addToCart = async () => {
        try {
            const creatCartOnApi = await api.createCart(id);
            setPerfume(creatCartOnApi);
            
    
        } catch (error) {
            console.log(error);
        }
    }
    
      const checkIfIsFavorite = () => {
        const filtered = favorites.filter(item => item._id === favorites.id);
     
        if(filtered.length > 0) {
            return true;
        }
        return false;
     }; 

     useEffect(() => {
        setIsFavorite(checkIfIsFavorite());
    }, [perfume]);

    const addFavorites = async () => {
        try {
            const addFavoritesApi = await api.addFavorites(id);
            getFavorites();
    
        } catch (error) {
            console.log(error);
        }
    }
  
    const deleteOneFavorite = async () => {
      try {
          const deleteOneFavoritesApi = await api.deleteFavorite(id);
          getFavorites();
  
      } catch (error) {
          console.log(error);
      }
  }

    return(
        <div >
            <Header/>

            <div className="card-page">
            {perfume ? 
                    <div className='card'>
                    <div className='button-card'>
                        <img src={perfume.img1} alt={perfume.name} onClick={() => setToggleImg(false)}/>
                        <img src={perfume.img2} alt="second" onClick={() => setToggleImg(true)}/>
                           </div>
               
                    <div className='img-toggle'>
                        {!toggleImg ?    
                        <img src={perfume.img1} className='img-size' alt={perfume.name}/>
                        :
                        <img src={perfume.img2} className='img-size' alt="second-image"/>
                        
                        }
                    </div>
                        
                    <div>
                         {isFavorite ? <TiHeartFullOutline size={30} style={{color: 'lightgrey'}} onClick={()=> deleteOneFavorite(perfume._id)}/> : <TiHeartOutline size={30} style={{color: 'lightgrey'}} onClick={()=> addFavorites(perfume._id)}/> }
                        {console.log(perfume._id)}
                    </div>
                
                    <div className='description'>
                        <h3>{perfume.brand}</h3>
                        <h6>{perfume.name}</h6>
                             <p style={{fontWeight:'bold', color: 'black'}}>R${perfume.price}</p>
                            <p>{perfume.description}</p> 
                            <button className="buy" onClick={()=>addToCart(perfume._id)}>BUY</button>
                    </div>
        
                    </div>  
            : '' }  
            </div>
            
            <CarouselProducts />
            <Subscribe/>
            <Footer/>
            
        </div>
    )
}
export default ProductCard;