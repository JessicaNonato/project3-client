import { React, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import api from "../utils/api.utils";
import { TiHeartFullOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import "../styles/ProductCard.css";


const ProductCard = ({userCart, getCart}) => {
  const { id } = useParams();
  const [perfume, setPerfume] = useState([]);
  const [toggleImg, setToggleImg] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [inCart, setInCart] = useState(false);
  const token = localStorage.getItem("token");
  const [cart, setCart] = useState(false);

  // const getCart = async () => {
  //   try {
  //     const cartApi = await api.getCart();
  //     setCart(cartApi);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   if (token) {
  //     // getCart();
  //     console.log(userCart);
  //   }
    
  // }, []);
  // console.log(userCart);
  
 

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
  }, [id, getPerfume]);

  const checkCart = () => {
    const cartFilter = userCart.filter(
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
      getCart();
      setCart(true);
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantityInTheCart = async () => {
    try {
      const update = await api.addProductsInTheCart(id);
      setInCart(true);
      getCart();
      setCart(true);
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
  }, [perfume, getFavorites, token]);



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


  return (
    <div className="product-details">
      
      <div className="card-page">
        {perfume ? (
          <div className="card">
            <div className="images">
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
                  style={{ color: "lightgrey"}}
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
                ADICIONAR AO CARRINHO
              </button>
              {cart ? 'Produto adicionado com sucesso!' : ""}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

   
    </div>
  );
};
export default ProductCard;
