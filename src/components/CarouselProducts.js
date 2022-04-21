import {React, useEffect, useState, useRef} from "react";
import api from '../utils/api.utils'
import '../styles/carouselProducts.css'
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';


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
                <button onClick={handleLeftClick}><IoIosArrowBack size={20}/> </button>
            </div>
        <div className="carouselProd" ref={carousel}>
           
            {perfumes.map ((item) => { const {_id, name, img1, price} = item; return(
                 <div className="item" key={_id}>
                 <div className="image">
                     <img src={img1} alt={name} />
                 </div>
                 <div className="info">
                 <span className="name">{name}</span>
                 <span className="price">{price}</span>
                 </div>
                 </div>
            )})}
        </div>
        <div className="buttons">
                <button onClick={handleRightClick}><IoIosArrowForward size={20}/> </button>
            </div>
        </div>
    )
}
export default CarouselProducts;