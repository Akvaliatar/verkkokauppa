import React from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsCart4 } from 'react-icons/bs';
import Logo from './logo.jpg'

export default function Header () {
  return (
    <header>
      <Row>
        <Col>
          <a href=''>FI</a>|<a href=''>EN</a>
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
