import {React, useEffect, useState, useRef} from "react";
import api from '../utils/api.utils'
import '../styles/carouselProducts.css'
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";


const CarouselProducts = () => {

    const [perfumes, setPerfumes] = useState([]);
    const carousel = useRef(null)
    
    const getPerfumes = async () => {
        try {
            const perfumesApi = await api.getAllProducts();
            setPerfumes( perfumesApi );
            console.log(perfumesApi)
    
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
                <button onClick={handleLeftClick}><IoIosArrowBack size={30} style={{color:"lightgray"}}/> </button>
            </div>
        <div className="carouselProd" ref={carousel}>
           
            {perfumes.map ((item) => { const {_id, name, img1, price} = item; return(
                 <div className="item" key={_id}>
                 <div className="image">
                     <img src={img1} alt={name} />
                 </div>
                 <div className="info">
                 <span className="name">{name}</span>
                 <span className="price">R${price}</span>
                 </div>
                 </div>
            )})}
        </div>
        <div className="buttons">
                <button onClick={handleRightClick}><IoIosArrowForward size={30} style={{color:"lightgray"}}/> </button>
            </div>
        </div>
    )
}
export default CarouselProducts;