import React from "react"
import { Link } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsCart4 } from 'react-icons/bs';

export default function Header () {
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
      
    </header>
  )
}
