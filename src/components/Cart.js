import {React, useEffect, useState, useMemo} from "react";
import api from '../utils/api.utils';
import Footer from "./Footer";
import Header from "./Header";
import TheCoeur from  './TheCoeur';
// import '../styles/Cart'


const Cart = ()=> {
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem('token');


    const getCartUser = async () => {
        try {
            const cartData = await api.getCart();
            setProducts(cartData.cart.products);
            console.log(cartData.cart.products)
    
        } catch (error) {
            console.log(error);
        }
    }
    console.log(products)

    useEffect(() => {
        getCartUser();
      }, []);
    
      const deleteProduct = async (id) => {
        try {
            const productDelete = await api.deleteProductInTheCart(id);
            getCartUser()
    
        } catch (error) {
            console.log(error);
        }
    }

    const handleQuantity = async(id, e) => {
        const quantity = parseInt(e.target.value);
    
        try {
            const updateQuant = await api.updateQuantity(id);
            getCartUser()
    
        } catch (error) {
            console.log(error);
        }
    }
       

    const somarProducts = useMemo(()=> products.map(item => item.quantity).reduce((acc, curr) => acc + curr, 0), [products]);

    const somarPrice = useMemo(()=> products.map(item => item.productId.price * item.quantity).reduce((acc, curr) => acc + curr, 0) / 100, [products]);
    

      return(
          <div>
              <Header/> 
              <TheCoeur/>
              <div>
                   <h1>Cart</h1>
                  <div>
                  <ul className='cart-page'>
                {products.map(item => <div key={item._id}>
                    <hr/>
                    <li>
                    <img src={item.productId.img1} alt=''/>
                    <p>{item.productId.name}  </p>
                     <p style={{fontWeight: 'bold'}}>R${item.productId.price}</p>
                     <p> {item.quantity}</p>
                     
                    </li> 
                    
                    </div>)}
                    <div className='sub'>
                    <p>Total Products:</p>
                    <span>{somarProducts}</span>
                    </div>
                    <div className='subtotal'>
                    <p>Subtotal:</p>
                    <span>R${somarPrice}</span>
                    </div>
                    
                    </ul>
                   </div>

              </div>
              <Footer/>

          </div>
      )

}

export default Cart;