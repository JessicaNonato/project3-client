import React, { useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TheCoeur from "../components/TheCoeur";
import api from "../utils/api.utils";

const SearchPage = () => {
    const [products, setProducts] = useState([])
    const [filteredList, setFilteredList] = useState([])
    
    const getProducts = async ()=> {
        try {
            const allProducts = await api.get('/products')
            setProducts(allProducts.data)
        } catch (error) {
            console.error(error.response)
        }
    }

    const filterProducts = products
        .filter(product => product.name.toLowerCase()
        .includes(value.toLowerCase()))


    useEffect(() => {
        setFilteredList(filterProducts)
    },[filterProducts])


    return(
        <>
        <Header/>
        <TheCoeur/>
        <div>
            {products
            ? products.map((product) => {
                return (
                    <div key={productId}>
                    <Link to={'/products/:productId'}>
                    {/* retorna img também */}
                    <h3>{product.name}</h3>
                    </Link>
                    </div>                
                )
            } ) 
        : 'No results for the search.'}
        </div>
        <Footer/>
        </>
    )
}

export default SearchPage;