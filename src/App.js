import { React, useEffect, useState } from "react";
import './css/App.css'
import { Switch, Route, useLocation } from "react-router-dom"
import Home from "./js/Home"
import AboutUs from "./js/AboutUs"
import Services from "./js/Services"
import Shop from "./js/Shop"
import Category from "./js/Category"
import Product from './js/Product'
import About from "./js/About"
import NotFound from "./js/NotFound"
import Navbar from "./js/Navbar"
import Footer from "./js/Footer"


const URL = "http://localhost/kotielainpuisto"

function App () {
  const [category, setCategory] = useState(1)
  const [product, setProduct] = useState(1)
    
  let location = useLocation()

  useEffect(()=> {
    if (location.state !== undefined) {
      setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi,teksti: location.state.teksti})
    }
  }, [location.state])

  useEffect(()=> {
    if (location.state !== undefined) {
      if (location.pathname === "/category") {
        setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi,teksti: location.state.teksti})
      } else if (location.pathname === "/product") {
        setProduct({
          tuotenro: location.state.tuotenro, tuotenimi: location.state.tuotenimi,
          trnro: location.state.trnro, hinta: location.state.hinta, kustannus: location.state.kustannus,
          trnro: location.state.trnro, vari: location.state.vari, maara: location.state.maara, 
          koko: location.state.koko, lankaTyyppiEläin: location.state.lankaTyyppiEläin, pituus: location.state.pituus
        })
      }
    }
  }, [location.state])

      {/* ostoskoriin tuotteen lisääminen */ }

      const [cart, setCart] = useState([]);
      useEffect(() => {
        if ('cart' in localStorage){
          setCart(JSON.parse(localStorage.getItem('cart')));
        }
      },[])
    
      function addToCart(product){
        const newCart = [...cart,product];
        setCart(newCart);
        localStorage.setItem('cart',JSON.stringify(newCart));
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
    <Navbar url={URL} cart={cart} />
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
        path="/category" render={() =>
        <Category
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
          product={product}
          cart={cart}
          addToCart={addToCart}
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
