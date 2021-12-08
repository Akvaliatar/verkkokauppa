import React from "react";
import "../css/product.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "../img/logo.png";

/*hinta x kpl tulostetaan lomakkeen painikkeeseen, mutta php:ta
 käyttävä laskenta on erikseen.*/
/*keskeneräistä..vielä ei ole kaikki routingit + fumktiot puuttuu*/

export default function Product({
  category,
  addToCart,
  updateAmount,
  product,
}) {
  return (
    <Container fluid className="mx-auto">
      <Row>
        <Col className="navigointi">
          <h2>
            Tuotteet
            <IoIosArrowForward />
            Kategoria {category?.trnimi}
            <IoIosArrowForward />
            Tuote {product?.tuotenimi}
          </h2>
        </Col>
      </Row>
      <form onSubmit={addToCart}>
        {/* ^ onSubmit={ }*/}
        <Row>
          <Col md={4} lg={4} className="profiili">
            <h1>Tuote {product?.tuotenimi}</h1>
            <h1>hinta {product?.tuotenimi}</h1>
            <p>tietoa tuotteesta.............</p>
          </Col>
          <Col md={4} lg={4}>
            <Carousel>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={Logo} />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={4} lg={4} className="form-tiedot">
            <h1>Hinta {product?.hinta} € / kpl </h1>
            <div className="input-loota">
              <tr>
                <td>
                  <h2>Väri:</h2>
                </td>
                <td>
                  <input list="colours" name="colour"></input>
                  <datalist id="colours">
                    <option value="suoraan tietokannasta" />
                  </datalist>
                </td>
              </tr>
            </div>
            <div className="input-loota">
              <tr>
                <td>
                  <h2>Koko:</h2>
                </td>
                <td>
                  <input list="sizes" name="size" placeholder="S" />
                  <datalist id="sizes">
                    <option value="S" />
                    <option value="M" />
                    <option value="L" />
                  </datalist>
                </td>
              </tr>
            </div>
            <div className="input-loota">
              <tr>
                <td>
                  <h2>Kpl:</h2>
                </td>
                <td>
                  <input type="number" min="1" max="99" placeholder="0"></input>
                </td>
              </tr>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="btn_loota">
              <button>
                <h1>OSTOSKORIIN</h1>
                <h2>numero kpl = hinta €</h2>
              </button>
            </div>
          </Col>
        </Row>
      </form>
      <Row>
        <Col xs={3}>
          <p>tähän tulee svg-homma</p>
        </Col>
        <Col xs={6}>
          <h1>Tuotetiedot:</h1>
          <p>
            ........................................
            ........................................
          </p>
        </Col>
        <Col xs={3}>
          <p>tähän toinen kuva</p>
        </Col>
      </Row>
    </Container>
  );
}
