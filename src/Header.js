import React from "react"
import './header.css'
import { Link } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsCart4 } from 'react-icons/bs';
import Logo from './logo.jpg'

export default function Header() {
    return (
        <header>
        <Row>
          <Col className="kieli">
            <a href='' className="FI">FI</a>
            <a>|</a>
            <a href='' className="EN">EN</a>
          </Col>
          <Col>
            <figure>
              <img src={Logo} />
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

