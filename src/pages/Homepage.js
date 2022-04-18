import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CarouselBrands from '../components/CarouselBrands'
import Subscribe from '../components/Subscribe';
import '../styles/homePage.css'

const HomePage = () => {
    return(
        <div className='home-page'>
        
        <Header/>
        <CarouselBrands />
        <div className='perfect'>
        <h2 className='pp'>Perfect Parfums</h2>
        <h2 className='fym'>FIND YOUR MATCH</h2>
        </div>
        <Subscribe/>
        <Footer/>
        </div> 
    );
};

export default HomePage;