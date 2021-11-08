import React from "react"
import './header.css'
import { Link } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsCart4 } from 'react-icons/bs';
import Logo from './logo.png'

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
      </header>
    )
}

