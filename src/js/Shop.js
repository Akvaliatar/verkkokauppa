import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Shop () {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container className="shopContainer">
      <Row>
        <Col xs={{span: 12, order: 2}} lg={{span: 12, order: 1}}>
        </Col>
        <Col xs={{span: 12, order: 1}} lg={{span: 12, order: 1}}>
          <p>
            Sivuiltamme löydät tietoa eläinpuistostamme ja voit myös käydä
            katsomassa verkkokauppamme sisältöä ja tarjottavia palveluita
          </p>
          <p>Alta löydät omista kategorioista myytävänä olevia tuotteita ja palveluita.</p>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 4, order: 1 }} >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Eläin herkut</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Go somewhere</button>
              </div>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 4, order: 2 }} >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title >Eläinten hoitotuotteet</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Go somewhere</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 12, order: 3 }} md={{ span: 6, order: 3 }} lg={{ span: 4, order: 3 }} >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Askastelu tarvikkeita</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Go somewhere</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 12, order: 4 }} md={{ span: 6, order: 4 }} lg={{ span: 4, order: 4 }} >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Asusteet</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Go somewhere</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 12, order: 5 }} md={{ span: 6, order: 5 }} lg={{ span: 4, order: 5 }} >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Palveluita</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Go somewhere</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 12, order: 6 }} md={{ span: 6, order: 6 }} lg={{ span: 4, order: 6 }} >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Kaikki tuottet</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Go somewhere</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </Container>
    

  )
}
