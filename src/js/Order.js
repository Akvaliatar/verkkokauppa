import React from "react";
import "../css/order.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Order({ cart, updateAmount, removeFromCart, emptyCart }) {
  
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
                      <button onClick={() => removeFromCart(product)}>Poista</button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>{sum.toFixed(2)}</td>
                <td></td>
                <td></td>
                <td><button href="#" onClick={e => emptyCart()}>Tyhjennä ostoskori</button></td>
              </tr>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
