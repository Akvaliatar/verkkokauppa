import React from "react"
import { Link } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
          <p>ostoskori icon</p>
        </Col>
      </Row>
      
    </header>
  )
}
