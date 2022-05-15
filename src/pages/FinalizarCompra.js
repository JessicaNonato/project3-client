import { React } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/FinalizarCompra.css";
import Subscribe from "../components/Subscribe";
import TheCoeur from "../components/TheCoeur";


const FinalizarCompra = ({ getCart, userCart }) => {

  return (
    <div>
      <Header userCart={userCart} getCart={getCart} />
      <TheCoeur />
      <div className="address-payment">
      
        
      <div class="form-group">
      <h5>Address Information</h5>
  <input type="street" 
         class="form-control" 
         id="autocomplete" 
         placeholder="Street"/>
  
  <input type="city" 
         class="form-control" 
         id="inputCity" 
         placeholder="City"/>
  
  <input type="state" 
         class="form-control" 
         id="inputState" 
         placeholder="State"/>
  
  <input type="zip" 
         class="form-control" 
         id="inputZip" 
         placeholder="Zip"/>
  
  <input type="county" 
         class="form-control" 
         id="inputCounty" 
         placeholder="County"/>
  
  <input type="country" 
         class="form-control" 
         id="inputCountry" 
         placeholder="Country"/>
</div>
      <div className="container">
      <div class="payment">
      <h5>Payment Information</h5>
      <div class="credit-card-box card-panel z-depth-2 animation-element slide-left">
        <div class="flip">
          <div class="front">
            <div class="logo">
              <img src="http://cdn.flaticon.com/svg/39/39134.svg" alt="" />
            </div>
            <div class="number input-field">
              <label for="card-number">Card Number</label>
              <input type="text" id="card-number" class="input-card-number" maxlength="4" />
              <input type="text" id="card-number-1" class="input-card-number" maxlength="4" />
              <input type="text" id="card-number-2" class="input-card-number" maxlength="4" />
              <input type="text" id="card-number-3" class="input-card-number" maxlength="4" />
            </div>
            <div class="cvv input-field">
              <label for="card-cvv">CVV</label>
              <input type="text" id="card-cvv" class="input-card-cvv" maxlength="3" />
            </div>
            <div class="card-holder input-field">
              <label for="name">Card Holder</label>
              <input type="text" name="name" id="name"/>
            </div>

            <div class="card-expiration-date input-field">
              <select id="month">
                <option></option>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
              </select>
              <select>
                          <option></option>
       
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
              </select>
              <label>Expires</label>
            </div>

          </div>

        </div>
      </div>
      </div>
        </div>
      </div>
      <div className="but"><button class="checkout">Checkout </button></div>
      
      <Subscribe />
      <Footer />
    </div>
  );
};

export default FinalizarCompra;
