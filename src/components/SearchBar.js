import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import '../styles/SearchBar.css'


const SearchBar = () => {
    const [value, setValue] = useState('')
    
  return (
    <>
    <div className="search-icon">
        <AiOutlineSearch style={{color: 'white'}} size='23'/>
        <input 
            type='search' 
            value={value} 
            placeholder='Search'
            onChange={(e) => setValue(e.target.value)}
            className='search-input'
        />
    </div>
    </>
  );
};

export default SearchBar;
