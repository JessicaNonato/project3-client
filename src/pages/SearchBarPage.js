import React, { useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TheCoeur from "../components/TheCoeur";
import api from "../utils/api.utils";
import Categories from  '../components/Categories';
import { Link, useParams } from 'react-router-dom';

const SearchPage = () => {
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
        <Header/>
        <TheCoeur/>
        <div>
           {filteredList ? filteredList.map (product => 
                <div key={product._id}>
                <Link to={`/products/${product._id}`}>
                <img src={product.img1} alt ='product-pic'/>
                <h3>{product.name}</h3>
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