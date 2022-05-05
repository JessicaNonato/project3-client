import {React, useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import api from '../utils/api.utils';
import '../styles/CategoriesPages.css';
import Subscribe from '../components/Subscribe';
import Categories from  '../components/Categories';
import TheCoeur from "../components/TheCoeur";
import banner from '../midia/Oriental.png'



const OrientalPage = () => {
    const categoryParams = useParams();
    const [perfumes, setPerfumes] = useState([]);
    
    const getPerfumes = async () => {
        try {
            const perfumesApi = await api.getAllProducts();
            setPerfumes( perfumesApi );
    
        } catch (error) {
            console.log(error);
        }
    }
    
  
    const perfumesFiltrados = perfumes.filter(item => item.category === "oriental")
     
   
    useEffect(() => {
        getPerfumes();
      }, [categoryParams]);

      return(
        <div>
              <Header />
              <TheCoeur/>
              <div className="page">
              <img className="image-banner" src={banner} alt=""/>
              <div className="products-row">
                  {perfumesFiltrados ? perfumesFiltrados.map ((item) => { const {_id, name, img1, price} = item; return(
                 <Link key={_id} className="perfume-link" to={`/product/${_id}`}>
                 <div className="item-page">
                 <div className="image-page">
                     <img src={img1} alt={name} />
                 </div>
                 <div className="info-page">
                 <span className="name-page">{name}</span>
                 <span className="price-page">R${price}</span>
                 </div>
                 </div>
                 </Link>
            )}): "No Results."}
              </div>
              </div>
              <Categories/>
              <Subscribe/>
              <Footer />
            
          </div>
      )
}

export default OrientalPage;
