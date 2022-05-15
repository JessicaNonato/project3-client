import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Ripple } from 'react-spinners-css';
import '../styles/SearchBar.css';

const SearchBarResult = (filteredList) => {
    const [list, setList] = useState([])
    useEffect(()=>{
        setList(filteredList.filteredList)
    }, [filteredList])
  return (
    <div className="products-row-search">
    {list.length ? list.map (product => 
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
        : <Ripple color="#e8b7c8"/>}
    </div>
  );
};

export default SearchBarResult;