import React, { useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TheCoeur from "../components/TheCoeur";
import api from "../utils/api.utils";
import Categories from  '../components/Categories';

const SearchPage = () => {
    const [products, setProducts] = useState([])
    const [filteredList, setFilteredList] = useState([])
    
    const getProducts = async ()=> {
        try {
            const allProducts = await api.getAllProducts()
            setProducts(allProducts)
        } catch (error) {
            console.error(error.response)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])


    const getFilterProducts = () => {
        try {
            const filtered = products.filter(product => product.name.toLowerCase()).includes(inputValue.toLowerCase())
        } catch (error) {
            console.error(error)
        }
    }
        
    useEffect(()=>{
        getFilterProducts()
        setFilteredList(filtered)
    }, [inputValue])


    return(
        <>
        <Header/>
        <TheCoeur/>
        <div>
           {filteredList ? filteredList.map (product => 
                <div key={product._id}>
                <Link to={`/products/${_id}`}>
                <img src={img1} alt ='product-pic'/>
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