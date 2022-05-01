import { React} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import CarouselProducts from "../components/CarouselProducts";
import Categories from "../components/Categories";
import TheCoeur from "../components/TheCoeur";
import Reviews from "../components/Reviews";
import ProductCard from "../components/ProductCard";

const ProductPage = (getCart, cart) => {


  return (
    <div>
      <Header cart={cart} />
      <TheCoeur />
      <ProductCard getCart={getCart}/>
      <Reviews/>
      <CarouselProducts />
      <div className="space"></div>
      <Categories />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default ProductPage;