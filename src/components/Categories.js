import {GiFlowerPot} from 'react-icons/gi';
import {GiDeadWood} from 'react-icons/gi';
import {CgAtlasian} from 'react-icons/cg';
import {GiHerbsBundle} from 'react-icons/gi';
import {GiOrangeSlice} from 'react-icons/gi';
import {React} from "react";
import { Link } from 'react-router-dom';
import '../styles/categories.css'


const Categories = () => {
    
    return(
        <div className='categories-section'>
            <h2> CATEGORIES</h2>
            <div className='categories-div'>
            <div className='link-categories'>
            <Link to={'/category/floral'}> 
            <GiFlowerPot size={50}/> 
            </Link> 
            </div>

            <div className='link-categories'>
            <Link to={'/category/amadeirado'}> 
            <GiDeadWood size={50}/> 
            </Link> 
            </div>
            
            <div className='link-categories'>
            <Link to={'/category/oriental'}> 
            <CgAtlasian size={50}/> 
            </Link> 
            </div>

            <div className='link-categories'>
            <Link to={'/category/aromatico'}> 
            <GiHerbsBundle size={50}/> 
            </Link> 
            </div>
            
            <div className='link-categories'>
            <Link to={'/category/citrico'}> 
            <GiOrangeSlice size={50}/> 
            </Link> 
            </div>
             
        
        </div>
        </div>
     
        
    )
}

export default Categories;