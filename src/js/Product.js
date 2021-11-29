import React from "react";
import "../css/product.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Product({ item }) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="navigointi">
            <p>{item?.tuotenimi}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div key={item?.tuotenro}>
            <h1>hello hello tähän tulee tuotteen nimi</h1>
            <p>{item?.tuotenimi}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
