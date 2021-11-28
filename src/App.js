import React from 'react'
import './css/App.css'
import { Switch, Route } from "react-router-dom"
import { useEffect, useState } from "react";
import Home from "./js/Home"
import AboutUs from "./js/AboutUs"
import Services from "./js/Services"
import Shop from "./js/Shop"
import About from "./js/About"
import NotFound from "./js/NotFound"
import Navbar from "./js/Navbar"
import Footer from "./js/Footer"
import Product from './js/Product';

const URL = "http://localhost/kotielainpuisto"

function App () {

      {/* ostoskoriin tuotteen lisääminen */ }
      const [category, setCategory] = useState(null);
      const [cart, setCart] = useState([]);
      useEffect(() => {
        if ('cart' in localStorage){
          setCart(JSON.parse(localStorage.getItem('cart')));
        }
      },[])
    
      function addToCart(product){
        const newCart = [...cart,product];
        setCart(newCart);
        localStorage.setItem('cart',JSON.stringify(cart));
      }

      function updateAmount(amount,product) {
        product.amount = amount;
        const index = cart.findIndex((item => item.id === product.id));
        const modifiedCart = Object.assign([...cart],{[index]:product});
        setCart(modifiedCart);
        localStorage.setItem('cart',JSON.stringify(modifiedCart));
      }
  

  return (
    <>
    
    <Navbar url={URL} setCategory={setCategory} cart={cart} />
    <div>
    <Switch>
      <Route
        path="/" render={() =>
        <Home
          url={URL}/> 
        } exact
      />
      <Route
        path="/aboutus" render={() =>
        <AboutUs
          url={URL}/> 
        } exact
      />
      <Route
        path="/services" render={() =>
        <Services
          url={URL}/> 
        } exact
      />
      <Route
        path="/shop" render={() =>
        <Shop
          url={URL}
          category={category}
          addToCart={addToCart} /> 
        }
      />
      <Route
        path="/product" render={() =>
        <Product
          url={URL}
          category={category}
          cart={cart}
          updateAmount={updateAmount} /> 
        }
      />
      <Route
        path="/about" render={() =>
        <About
          url={URL}/> 
        } exact
      />
      <Route component={NotFound} />
    </Switch>
    </div>
    <Footer />
    </>
  )
}

export default App
