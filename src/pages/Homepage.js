import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CarouselBrands from '../components/CarouselBrands'
import Subscribe from '../components/Subscribe';
import '../styles/homePage.css'
import Categories from '../components/Categories';
import CarouselProducts from '../components/CarouselProducts';

const HomePage = () => {
    return(
        <div className='home-page'>
        
        <Header/>
        <CarouselBrands />
        <div className='perfect'>
        <h2 className='pp'>Perfect Parfums</h2>
        <h2 className='fym'>FIND YOUR MATCH</h2>

        <CarouselProducts/>
        </div>
        
        <Categories/>
        <Subscribe/>
        <Footer/>
        </div> 
    );
};

export default HomePage;