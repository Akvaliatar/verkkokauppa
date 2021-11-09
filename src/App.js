import React from 'react'
import './css/App.css'
import { Switch, Route} from "react-router-dom"
import Home from "./js/Home"
import AboutUs from "./js/AboutUs"
import Services from "./js/Services"
import Shop from "./js/Shop"
import About from "./js/About"
import NotFound from "./js/NotFound"
import Navbar from "./js/Navbar"
import Footer from "./js/Footer"

function App () {
  return (
    <>
    
    <Navbar />
    <div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/aboutus" component={AboutUs} exact />
      <Route path="/services" component={Services} exact />
      <Route path="/shop" component={Shop} exact />
      <Route path="/about" component={About} exact />
      <Route component={NotFound} />
    </Switch>
    </div>
    <Footer />
    </>
  )
}

export default App
