import {React, useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import api from '../utils/api.utils'

const FloralPage = () => {
    const categoryParams = useParams();
    const [perfumes, setPerfumes] = useState([]);
    
    const getPerfumes = async () => {
        try {
            const perfumesApi = await api.getAllProducts();
            setPerfumes( perfumesApi );
            console.log(perfumesApi)
    
        } catch (error) {
            console.log(error);
        }
    }
    
    const filterApi = perfumes.filter(item => item.category == "floral")
    console.log(filterApi)
    useEffect(() => {
        getPerfumes();
      }, [categoryParams]);

      return(
          <div>
              <Header />
              <div>
                  {perfumes ? perfumes.map((perfume) => {
                      return (
                        <div className="wrap-element" key={perfume._id}>
                             <Link className="perfume-link" to={`/perfume/${perfume._id}`}>
                    <div className="perfume">
                      <figure>
                        <img
                          src={perfume.img1}
                          className="list-img"
                          alt=""
                        />
                      </figure>
                      <h3>{perfume.name}</h3>
                      <h4>{perfume.price}</h4>
                    </div>
                  </Link>
                        </div> 
                      )
                  })
                  : "No Results."}
              </div>
              <Footer />
          </div>
      )
}

export default FloralPage;

