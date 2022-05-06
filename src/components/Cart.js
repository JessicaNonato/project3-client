import {React, useEffect, useState, useMemo} from "react";
import {IoIosClose} from 'react-icons/io';
import api from '../utils/api.utils';
import Footer from "./Footer";
import Header from "./Header";
import TheCoeur from  './TheCoeur';
import '../styles/Cart.css'


const Cart = ({userCart, getCart})=> {
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState();
    const token = localStorage.getItem('token');


    const getCartUser = async () => {
        try {
            const cartData = await api.getCart();
            setProducts(cartData.cart.products);
            console.log(cartData)
    
        } catch (error) {
            console.log(error);
        }
    }
    console.log(products)

    useEffect(() => {
        getCartUser();
      }, []);
    
    const handleQuantity = async(id, e) => {
        const quantity = parseInt(e.target.value);
    
        try {
            const updateQuant = await api.updateQuantity(id, quantity);
            getCartUser()
    
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProductUser = async(id) => {
        try {
            const deleteCartData = await api.deleteProductInTheCart(id);
            getCartUser()
    
        } catch (error) {
            console.log(error);
        }
    }
       

    const somarProducts = useMemo(()=> products.map(item => item.quantity).reduce((acc, curr) => acc + curr, 0), [products]);

    const somarPrice = useMemo(()=> products.map(item => item.productId.price * item.quantity).reduce((acc, curr) => acc + curr, 0), [products]);
    

      return(
          <div>
              <Header userCart={userCart} getCart={getCart}/> 
              <TheCoeur/>
              <div className="cartAll">
                   <h1>Cart</h1>
                  <div className='cart'>
                  <ul className='cart-page'>
                {products.map(item => <div className="perfume-div" key={item._id}>
                    
                    
                    <li>
                    <div className="cart-img">
                    <img src={item.productId.img1} alt='' className="photo-cart"/>
                    <div className="name">
                    <p>{item.productId.name}  </p> 
                    <button className="delete" onClick={() => deleteProductUser(item.productId._id)}>x</button>
                    </div>
                    
                     <p style={{fontWeight: 'bold'}}>R${item.productId.price}</p>
                     <div className="quantity">
                        <input type='number' value={item.quantity} onChange={(e)=> handleQuantity(item.productId._id, e)}/>
                     </div>
                     <p>Quantity: {item.quantity}</p>
                     <hr style={{width: '65vw'}}/>
                     </div>
                     
                     
                     
                    </li> 
                    
                    </div>)}
                    <div className="sub-cart"> 
                    <div className='sub'>
                    <p>Total Products:</p>
                    <span>{somarProducts}</span>
                    </div>
                    <div className='subtotal'>
                    <p>Subtotal:</p>
                    <span>R${somarPrice}.00</span>
                    </div>
                    <button className="finalizar">Finalizar Compra</button>
                    </div>
                    
                    </ul>
                   </div>

              </div>
              <Footer/>

          </div>
      )

}

export default Cart;