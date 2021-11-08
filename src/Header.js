import React from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
            <img alt='logo image' />
          </figure>
        </Col>
        <Col>
          <p>ostoskori icon</p>
        </Col>
      </Row>
    </header>
  )
}
