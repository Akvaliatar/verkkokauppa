import React from 'react'
import './App.css'
import { Switch, Route} from "react-router-dom"
import Home from "./Home"
import AboutUs from "./AboutUs"
import Services from "./Services"
import Shop from "./Shop"
import About from "./About"
import NotFound from "./NotFound"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"

function App () {
  return (
    <>
    
    <Header />
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
