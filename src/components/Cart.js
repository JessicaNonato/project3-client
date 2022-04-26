import {React, useEffect, useState, useMemo} from "react";
import api from '../utils/api.utils';
import Footer from "./Footer";
import Header from "./Header";
import TheCoeur from  './TheCoeur';


const Cart = ()=> {
    const [products, setProducts] = useState([]);

    const getCartUser = async () => {
        try {
            const cartData = await api.getCart();
            setProducts( cartData.cart.products);
            console.log(cartData.cart.products)
    
        } catch (error) {
            console.log(error);
        }
    }

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

    const somarPrice = useMemo(()=> products.map(item => item._id.price * item.quantity).reduce((acc, curr) => acc + curr, 0) / 100, [products]);


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
                     {item.productId.name}   
                    </li> 
                    </div>)}

                    </ul>
                   </div>

              </div>
              <Footer/>

          </div>
      )

}

export default Cart;