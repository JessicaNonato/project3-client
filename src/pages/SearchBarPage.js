import React, { useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TheCoeur from "../components/TheCoeur";
import api from "../utils/api.utils";
import Categories from  '../components/Categories';
import { Link, useParams } from 'react-router-dom';
import '../styles/SearchBar.css'

const SearchPage = ({getCart, userCart}) => {
    const [products, setProducts] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [inputValue, setInputValue] = useState('');
    
    const {qry} = useParams(); 
    console.log(qry)
    
    const getProducts = async ()=> {
        try {
            const allProducts = await api.getAllProducts()
            setProducts(allProducts)
        } catch (error) {
            console.error(error.response)
        }
    }
    console.log(products)

    useEffect(() => {
        getProducts()
    }, [qry])

    // const handleChange = (e) => {
    //     setInputValue(e.target.value);
    // };


    const getFilterProducts = () => {
        try {
            const filtered = products.filter(product => product.name.toLowerCase().includes(qry.toLowerCase()));
            setFilteredList(filtered)
        } catch (error) {
            console.error(error)
        }
    }
    console.log(filteredList)
        
    useEffect(()=>{
        getFilterProducts()
    }, [filteredList])


    return(
        <>
        <Header userCart={userCart} getCart={getCart}/>
        <TheCoeur/>
        <div className="products-row-search">
           {filteredList ? filteredList.map (product => 
                <div key={product._id}>
                <Link className="perfume-link" to={`/product/${product._id}`}>
                <div className="item-search">
            <figure  className="image-search">
              <img
                src={product.img1}
                alt=""
              />
            </figure>
            <div className="info-search">
              <h3 className="name-search">{product.name}</h3>
              <p className="price-search">R${product.price}</p>
            </div> 
          </div>
                </Link>
                </div>                
             ) 
        : 'No results for the search.'}
        </div>
        <Categories/>
        <Footer/>
        </>
    );
};

export default SearchPage;