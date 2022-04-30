import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../utils/api.utils";
import Footer from "./Footer";
import Header from "./Header";
import Subscribe from "./Subscribe";
import CarouselProducts from "./CarouselProducts";
import { TiHeartFullOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import "../styles/productCard.css";
import { addPointerEvent } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";

import Categories from "./Categories";

import TheCoeur from "./TheCoeur";

const ProductCard = () => {
  const { id } = useParams();
  const [perfume, setPerfume] = useState([]);
  const [toggleImg, setToggleImg] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  // const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");
  const [mod, setMod] = useState(false);
  const [inCart, setInCart] = useState(false);
  const token = localStorage.getItem("token");
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    try {
      const cartApi = await api.getCart();
      setCart(cartApi);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      getCart();
    }
    
  }, []);

  const getPerfume = async () => {
    try {
      const perfumesApi = await api.getOneProduct(id);
      setPerfume(perfumesApi);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPerfume();
  }, [id]);

  const checkCart = () => {
    const cartFilter = cart.cart.products.filter(
      (item) => item.productId._id === perfume._id
    );

    if (cartFilter.length > 0) {
      setInCart(true);
    }
  };

  const addToCart = async () => {
    try {
      const creatCartOnApi = await api.createCart(id);
      setInCart(true);
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantityInTheCart = async () => {
    try {
      const update = await api.addProductsInTheCart(id);
      setInCart(true);
    } catch (error) {
      console.log(error);
    }
  };
  

  const getFavorites = async () => {
    try {
      const favoritesPerfumes = await api.getAllFavorites(); 
      const filteredFavorites = favoritesPerfumes.products.filter(
        (item) => item._id === perfume._id
      );
      if (filteredFavorites.length > 0) {
        setIsFavorite(true);
      } else{
        setIsFavorite(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getFavorites();
    }
  }, [perfume]);



  const addFavorites = async () => {
    try {
      const addFavoritesApi = await api.addFavorites(id);
      setIsFavorite(true);
      getFavorites();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOneFavorite = async () => {
    try {
      const deleteOneFavoritesApi = await api.deleteFavorite(id);
      setIsFavorite(false);
      getFavorites();
    } catch (error) {
      console.log(error);
    }
  };

  const getReviews = async () => {
    try {
      const reviewsApi = await api.getAllReviews(id);
      setReviews(reviewsApi);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getReviews();
  }, [id]);

  const toggle = () => {
    setMod(!mod);
  };

  const handleReviewPost = async (e) => {
    e.preventDefault();

    try {
      const add = await api.addReview(id, { review });
      setReview("");
      getReviews();
      setMod(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <TheCoeur />
      <div className="card-page">
        {perfume ? (
          <div className="card">
            <div className="button-card">
              <img
                src={perfume.img1}
                alt={perfume.name}
                onClick={() => setToggleImg(false)}
              />
              <img
                src={perfume.img2}
                alt="second"
                onClick={() => setToggleImg(true)}
              />
            </div>

            <div className="img-toggle">
              {!toggleImg ? (
                <img
                  src={perfume.img1}
                  className="img-size"
                  alt={perfume.name}
                />
              ) : (
                <img
                  src={perfume.img2}
                  className="img-size"
                  alt="second-image"
                />
              )}
            </div>

            <div>
              {isFavorite ? (
                <TiHeartFullOutline
                  size={30}
                  style={{ color: "lightgrey" }}
                  onClick={() => deleteOneFavorite(perfume._id)}
                />
              ) : (
                <TiHeartOutline
                  size={30}
                  style={{ color: "lightgrey" }}
                  onClick={() => addFavorites(perfume._id)}
                />
              )}
              
            </div>

            <div className="description">
              <h3>{perfume.brand}</h3>
              <h6>{perfume.name}</h6>
              <p style={{ fontWeight: "bold", color: "black" }}>
                R${perfume.price}
              </p>
              <p style={{ fontWeight: "bold", color: "black" }}>
                {perfume.size}
              </p>
              <p>{perfume.description}</p>

              <button
                className="buy"
                onClick={() =>
                  checkCart
                    ? addToCart(perfume._id)
                    : updateQuantityInTheCart(perfume._id)
                }
              >
                COMPRAR
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="reviews">
        <div className="div-avalia">
          <div>
            <h4 className="avaliacoes">
              Avaliações {"(" + reviews.length + ")"}
            </h4>
          </div>
          <div>
            <button className="avalie" onClick={toggle}>
              Avalie
            </button>
          </div>
        </div>

        {reviews.length ? (
          <ul className="review">
            {reviews.map((item) => (
              <li kew={item.productId}>
                <div>
                  <span>
                    {" "}
                    {item.userId.name}
                  </span>
                  {item.createdAt && (
                    <span
                      style={{
                        fontSize: "0.9rem",
                        marginLeft: "20px",
                        color: "lightgrey",
                      }}
                    >
                      {item.createdAt.slice(0, 10)}
                    </span>
                  )}
                </div>
                <div>
                  <p>"{item.review}"</p>
                </div>
              </li>
            ))}
          </ul>
        ) : null}

        <div>
          {!mod ? (
            ""
          ) : (
            <>
              {token ? (
                <>
                  <form className="form" onSubmit={handleReviewPost}>
                    <RiCloseFill
                      style={{ margin: "2% 92%" }}
                      onClick={toggle}
                    />
                    <div className="rev">
                      <h5 style={{ fontWeight: "bold" }}>
                        Compartilhe a sua experiência
                      </h5>
                      <div>
                        <p>Avaliação *</p>
                        <textarea
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                        />
                      </div>
                      <p style={{ fontSize: "0.9rem" }}>
                        Descreva os pontos positivos e negativos do produto e da
                        sua experiência em nossa loja.
                      </p>
                      <button className="publicar" type="submit">
                        Publicar Avaliação
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="go-login">
                    <RiCloseFill onClick={toggle} id="close-btn-small" />
                    <h5>Please login to write a review.</h5>
                    <Link to="/signup">LOGIN</Link>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <CarouselProducts />
      <div className="space"></div>
      <Categories />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default ProductCard;
