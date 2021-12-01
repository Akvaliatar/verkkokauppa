import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import DogandCat from '../img/dogandcat.jpg';


export default function Products({url, category, addToCart }) {
  const [products, setProducts] = useState([])

  const [item, setItem] = useState([])
  // let productPicture = "https://koulu-b8d54.web.app/" + product.tuotenro

  useEffect(() => {
    console.log(category)
    axios.get(url + "/products/getproducts.php/" + category.trnro)
    .then((response) => {
      const json = response.data
      setProducts(json)
    }).catch(error => {
      if (error.response === undefined) {
        alert(error)
      } else {
        alert(error.response.data.error)
      }
    })
  }, [category]);

  {/* ostoskoriin tuotteen lisääminen */ }

  const [cart, setCart] = useState([]);
  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart], { [index]: product });
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
  }


  return (
    <div>
      <div>
        {/* tähän tulee kategorian nimi ja lyhyt teksti */}
        <h3>{category?.trnimi}</h3>
        <p>{category?.teksti}</p>
      </div>

      {/* Tämä näyttää halutun kategorian tiedot. Vielä puuttuu oleellisia tietoja, esim hinta */}
      {products?.map(product => (
        <div key={product.tuotenro}>
          <Card style={{ width: '18rem', border: " 2px solid #514b3b" }}>
            <Card.Img variant="top" src={"https://koulu-b8d54.web.app/kissa.jpg"} />
            <Card.Body style={{ background: "#a8ae8a" }}>
              <Card.Title><p>{product.tuotenimi}</p></Card.Title>
              <Card.Text>
                <p>testi</p>
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Lisätietoja
                  <Link
                    to={{
                      pathname: '/product',
                      state: {
                        id: product.tuotenro,
                        name: product.tuotenimi,
                        price: product.hinta,
                      }
                    }}>
                    {product.name}
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
