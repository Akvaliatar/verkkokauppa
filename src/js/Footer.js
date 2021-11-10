import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SiFacebook, SiInstagram, SiGoogleplay, SiApple } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <div>
              <ul>
                <li>
                  <a href="">evästeet</a>
                </li>
                <li>
                  <a href="">rekisteriseloste</a>
                </li>
                <li>
                  <a href="">toimitusehdot</a>
                </li>
                <li>
                  <a href="">yhteystiedot</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <h3>Seuraa meitä</h3>
            <div className="ikonit">
              <a>
                <Link to="https://www.instagram.com/toivon_kotielainpuisto/">
                  <SiInstagram size={28} />
                </Link>
              </a>
              <a>
                <Link to="https://www.facebook.com/profile.php?id=100074719422748">
                  <SiFacebook size={28} />
                </Link>
              </a>
            </div>
          </Col>
          <Col>
            <h3>Lataa sovellus</h3>
            <div className="ikonit">
              <a>
                <Link to="https://play.google.com/store/apps?hl=fi&gl=US">
                  <SiGoogleplay size={28} />
                </Link>
              </a>
              <a>
                <Link to="https://apps.apple.com/us/app/apple-store/id375380948">
                  <SiApple size={28} />
                </Link>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
