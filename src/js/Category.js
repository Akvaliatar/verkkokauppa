import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import DogandCat from '../img/dogandcat.jpg';
import { Link } from 'react-router-dom';

export default function Details (props,{addToCart}) {

  const URL = "http://localhost/kotielainpuisto/products/getproducts.php/"
  let PRODUCT = URL + props.trnro
  const [item, setItem] = useState([])
  let productPicture =  "https://koulu-b8d54.web.app/" + item.tuotenro

  useEffect(() => {
    axios.get(PRODUCT)
      .then((response) => {
        setItem(response.data)
      }).catch(error => {
        alert(error.response ? error.response.data.error : error);
      })
  }, [])

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
    <div>
        <div>
          {/* tähän tulee kategorian nimi ja lyhyt teksti */}
          <h3>{props.trnimi}</h3>
          <p>{props.teksti}</p>
          <p><a href='#' onClick={props.close}>Paina tästä palataksesi kategorian valintaan</a></p>
        </div>
        
        {/* Tämä näyttää halutun kategorian tiedot. Vielä puuttuu oleellisia tietoja, esim hinta */}
        {item?.map(item => (
          <div key={item.tuotenro}>
              <Card style={{ width: '18rem', border: " 2px solid #514b3b" }}>
                <Card.Img variant="top" src={"https://koulu-b8d54.web.app/kissa.jpg"} />
                <Card.Body style={{ background: "#a8ae8a" }}>
                  <Card.Title><p>{item.tuotenimi}</p></Card.Title>
                  <Card.Text>
                    <p>testi</p>
                  </Card.Text>
                  <div className="buttonToCenter" >
                    <button className="webShopButton">Lisätietoja
                    <Link
                      to={{
                        pathname:'/product',
                        state: {
                          id:item.tuotenro,
                          name:item.tuotenimi,
                          price:item.hinta,
                        }
                      }}>
                        {item.name}
                    </Link>
                    </button>
                  </div>
                  <div className="buttonToCenter" >
                  <button className="webShopButton" onClick={e => addToCart(item)}>Lisää ostoskoriin</button>
                </div>
                </Card.Body>
              </Card>
   
          </div>
        ))}
</div>
  )
}
