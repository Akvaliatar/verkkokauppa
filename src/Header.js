import React from "react"
import { Link } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsCart4 } from 'react-icons/bs';

export default function Header() {
    return (
        <header>
        <Row>
          <Col>
            <a href=''>FI</a>|<a href=''>EN</a>
          </Col>
          <Col>
            <figure>
              <img scr={'./logo.png'} alt='logo' />
            </figure>
          </Col>
          <Col>
            <p><BsCart4/></p>
          </Col>
        </Row>
        <div>
          <a href='/'>Koti</a>
          <a href='/aboutus'>Meistä</a>
          <a href='/services'>Palvelut</a>
          <a href='/Shop'>Verkkokauppa</a>
          <a href='/about'>Omat tiedot</a>
        </div>
      </header>
    )
}