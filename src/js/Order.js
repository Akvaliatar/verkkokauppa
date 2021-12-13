import React from "react";
import "../css/order.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Order({ cart, updateAmount, removeFromCart }) {
  function changeAmount(e, product) {
    updateAmount(e.target.value, product);
  }

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
                return (
                  <tr>
                    <td>{product.tuotenimi}</td>
                    <td>{(product.hinta * product.amount).toFixed(2)} €</td>
                    <td>
                      {" "}
                      Määrä:
                      <input
                        type="number"
                                step="1"
                                min="1"
                        onChange={(e) => changeAmount(e, product)}
                        value={product.amount}
                      />
                    </td>
                    <td>
                      <a onClick={() => removeFromCart(product)}>Poista</a>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
