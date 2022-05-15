import {React, useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import api from '../utils/api.utils';
import '../styles/CategoriesPages.css';
import Subscribe from '../components/Subscribe'
import TheCoeur from "../components/TheCoeur";
import Categories from  '../components/Categories';
import banner from '../midia/Amadeirado.png'
import { Ripple } from 'react-spinners-css';


const AmadeiradoPage = ({getCart, userCart}) => {
    const categoryParams = useParams();
    const [perfumes, setPerfumes] = useState([]);
    const [inCart, setInCart] = useState(false);
    const [cart, setCart] = useState(false);
    
    
    const getPerfumes = async () => {
        try {
            const perfumesApi = await api.getAllProducts();
            setPerfumes( perfumesApi );
           
    
        } catch (error) {
            console.log(error);
        }
    }
    
  
    const perfumesFiltrados = perfumes.filter(item => item.category === "amadeirado");

        
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
        getPerfumes();
      }, [categoryParams]);

      return(
          <div>
              <Header userCart={userCart} getCart={getCart} />
              <TheCoeur/>
              <div className="page">
              <div className="category"><p>Amadeirado</p></div>
              {/* <img className="image-banner" src={banner} alt=""/> */}
              <div className="products-row">
                  {perfumesFiltrados.length ? perfumesFiltrados.map ((item) => { const {_id, name, img1, price} = item; return(
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
              <Footer />
            
          </div>
      )
}

export default AmadeiradoPage;
