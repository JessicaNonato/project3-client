import { React} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import CarouselProducts from "../components/CarouselProducts";
import Categories from "../components/Categories";
import TheCoeur from "../components/TheCoeur";
import Reviews from "../components/Reviews";
import ProductCard from "../components/ProductCard";

const ProductPage = ({getCart, userCart}) => {
console.log(userCart);

  return (
    <div>
      <Header userCart={userCart} getCart={getCart}/>
      <TheCoeur />
      <ProductCard getCart={getCart} userCart={userCart} />
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