import { React, useEffect, useState } from "react";
import "../css/order.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Order({ cart, updateAmount, removeFromCart, emptyCart }) {
  const [asEtu, setAsEtu] = useState("")
  const [asSuku, setAsSuku] = useState("")
  const [postinro, setPostinro] = useState("")
  const [postitmp, setPostitmp] = useState("")
  const [puh, setPuh] = useState("")
  const [sposti, setSposti] = useState("")

  function changeAmount(e, product) {
    updateAmount(e.target.value, product);
  }

  let sum = 0

  return (
    <Container fluid className="mx-auto">
      <Row>
        <Col xs={12}>
          <h3>Ostoskori</h3>
        </Col>
        <Col xs={12}>
          <div className="ostokset">
            <table>
              {cart.map((product) => {
                sum+=parseFloat(product.price)
                return (
                  <tr>
                    <td>{product.tuotenimi}</td>
                    <td>{(product.hinta * product.amount).toFixed(2)} €</td>
                    <td>
                      Määrä:   
                      {" "}
                      <input
                        type="number"
                                step="1"
                                min="1"
                        onChange={(e) => changeAmount(e, product)}
                        value={product.amount}
                      />
                    </td>
                    <td>
                      <button className="delete-btn" onClick={() => removeFromCart(product)}>Poista</button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>{sum.toFixed(2)}</td>
                <td></td>
                <td></td>
                <td><button className="delete-btn" href="#" onClick={e => emptyCart()}>Tyhjennä ostoskori</button></td>
              </tr>
            </table>

            <form className="order-form">
              <div>
                <label>Etunimi: </label>
                <input className="form-control" onChange={e => setAsEtu(e.target.value)} />
              </div>
              <div>
                <label>Sukunimi: </label>
                <input className="form-control" onChange={e => setAsSuku(e.target.value)} />
              </div>
              <div>
                <label>Postinumero: </label>
                <input className="form-control" onChange={e => setPostinro(e.target.value)} />
              </div>
              <div>
                <label>Postitoimipaikka: </label>
                <input className="form-control" onChange={e => setPostitmp(e.target.value)} />
              </div>
              <div>
                <label>Puhelinnumero: </label>
                <input className="form-control" onChange={e => setPuh(e.target.value)} />
              </div>
              <div>
                <label>Sähköposti: </label>
                <input className="form-control" onChange={e => setSposti(e.target.value)} />
              </div>
              <div className="order-btn">
                <button>Tilaa</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
