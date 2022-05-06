import {React, useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import api from '../utils/api.utils';
import '../styles/CategoriesPages.css';
import Subscribe from '../components/Subscribe';
import Categories from  '../components/Categories';
import TheCoeur from "../components/TheCoeur";
import banner from '../midia/Floral.png'



const FloralPage = ({getCart, userCart}) => {
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
    
    const filterApi = perfumes.filter(item => item.category === "floral")
    useEffect(() => {
        getPerfumes();
      }, [categoryParams]);

      return(
          <div>
              <Header userCart={userCart} getCart={getCart} />
              <TheCoeur/>
              <div className="page">
              <img className="image-banner" src={banner} alt=""/>
              <div className="products-row">
                  {filterApi ? filterApi.map ((item) => { const {_id, name, img1, price} = item; return(
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

export default FloralPage;

