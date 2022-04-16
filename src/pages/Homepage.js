import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CarouselBrands from '../components/CarouselBrands'
const HomePage = () => {
    return(
        <div>
        <Header/>
        <CarouselBrands />
        <Footer/>
        </div> 
    );
};

export default HomePage;