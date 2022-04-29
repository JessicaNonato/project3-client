import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import { Link, Navigate, useNavigate} from 'react-router-dom';

const SearchIcon = styled.div`
  display: flex;
  padding-right: 10px;
  align-items: center;
  margin: 5px;
  size: 23px;
`

const SearchInput = styled.input`
  border-radius: 5px;
  color:black;
  border: none;
`

const SearchBar = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()

const enter = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      navigate(`/search/${value}`)
}}
    
  return (
    <>
    <SearchIcon>
    <AiOutlineSearch style={{color: 'white'}} size='23'/>
        <SearchInput 
            type='search' 
            value={value} 
            placeholder='Search'
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={enter}
            className='search-input'
        />
    </SearchIcon>
    </>
  );
};

export default SearchBar;
