import React from "react";
import "../css/product.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Product({ url, category, addToCart, product }) {
  return (
    <Container fluid>
      <Row>
        <Col>
          {/*latelin noita testiksi ja jätän, että näkyy ettei näy*/}
          <div className="navigointi">
          {product?.hinta}
            <p>{product?.tuotenimi}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div key={product?.tuotenro}>
            <h1>ei se..ei se vaa toimi ¤-¤</h1>
            <p>{product?.tuotenimi}</p>

          </div>
        </Col>
      </Row>
    </Container>
  );
}
