import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SiFacebook, SiInstagram, SiGoogleplay, SiApple } from "react-icons/si";

export default function Footer() {
    return (
        <footer>
        <Container>
          <Row>
            <Col>
              <h3>Seuraa meitä</h3>
              <figure>
                <img scr='' alt='Instagram'></img>
                <img scr='' alt='Facebook/Meta'></img>
                <p> <SiFacebook /></p>
                <p> <SiInstagram /> </p>
              </figure>
              <ul className='footer_ul'>
                <li>
                  <a href=''>evästeet</a>
                </li>
                <li>
                  <a href=''>rekisteriseloste</a>
                </li>
                <li>
                  <a href=''>toimitusehdot</a>
                </li>
                <li>
                  <a href=''>yhteystiedot</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h3>Lataa sovellus</h3>
              <ul className="footer_ul">
                <li><SiGoogleplay /></li>
                <li><SiApple /></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}