import {React, useEffect, useState, useRef} from "react";
import api from '../utils/api.utils'
import '../styles/CarouselProducts.css'
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Ripple } from 'react-spinners-css';


const CarouselProducts = () => {

    const [perfumes, setPerfumes] = useState([]);
    const carousel = useRef(null)
    
    const getPerfumes = async () => {
        try {
            const perfumesApi = await api.getAllProducts();
            setPerfumes( perfumesApi );
            
    
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPerfumes();
      }, []);

      const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
      }

      const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return(
        <div className="component">
             <div className="buttons">
                <button onClick={handleLeftClick}><IoIosArrowBack size={30} style={{color:"504e4e"}}/> </button>
            </div>
        <div className="carouselProd" ref={carousel}>
           
            {perfumes.length ? perfumes.map ((item) => { const {_id, name, img1, price} = item; 
            return(
                <Link key={_id} className="perfume-link" to={`/product/${_id}`}>
                 <div className="item">
                 <div className="image">
                     <img src={img1} alt={name} />
                 </div>
                 <div className="info">
                 <span className="name">{name}</span>
                 <span className="price">R${price}</span>
                 </div>
                 </div>
                 </Link>
            )}) : <Ripple color="#e8b7c8"/>}
        </div>
        <div className="buttons">
                <button onClick={handleRightClick}><IoIosArrowForward size={30} style={{color:"504e4e"}}/> </button>
            </div>
        </div>
    )
}
export default CarouselProducts;