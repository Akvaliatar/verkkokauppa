import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import DogandCat from '../img/dogandcat.jpg';

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
          <h1>Shop</h1>
        </Col>
        <Col xs={{span: 12, order: 1}} lg={{span: 12, order: 1}}>
          <p>Alta löydät omista kategorioista myytävänä olevia tuotteita ja palveluita.</p>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 4, order: 1 }} >
          <Card style={{ width: '18rem', border: " 2px solid #514b3b" }}>
            <Card.Img variant="top" src={"http://localhost:8000"+DogandCat} />
            <Card.Body style={{ background: "#a8ae8a"}}>
              <Card.Title>Eläin herkut</Card.Title>
              <Card.Text>
                Täältä voit katsella Toivon kotieläinpuiston eläinten lempi herkkuja ja voit ostelle herkkuja omalle lenmmikille.
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton"><a href="#">Katso lisää</a></button>
              </div>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 4, order: 2 }} >
          <Card style={{ width: '18rem', border: " 2px solid #514b3b" }} >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body style={{ background: "#a8ae8a"}} >
              <Card.Title>Eläinten hoitotuotteet</Card.Title>
              <Card.Text>
                Kategoriasta löydät eläinystävällisiä hoitotuotteita.
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Katso lisää</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 12, order: 3 }} md={{ span: 6, order: 3 }} lg={{ span: 4, order: 3 }} >
          <Card style={{ width: '18rem', border: " 2px solid #514b3b" }} >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Askastelu tarvikkeita</Card.Title>
              <Card.Text>
                Askartelu tarvikkeita mukavaan puuhasteluun
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Katso lisää</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 12, order: 4 }} md={{ span: 6, order: 4 }} lg={{ span: 4, order: 4 }} >
          <Card  >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Asusteet</Card.Title>
              <Card.Text>
                Täältä löydät tilan omasta villasta tehtyjä villa-asusteita
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Katso lisää</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 12, order: 5 }} md={{ span: 6, order: 5 }} lg={{ span: 4, order: 5 }} >
          <Card  >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Palveluita</Card.Title>
              <Card.Text>
                Tästä pääset katselemaan mitä eripalveluita tarjoamme asiakkaille
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Katso lisää</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 12, order: 6 }} md={{ span: 6, order: 6 }} lg={{ span: 4, order: 6 }} >
          <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Kaikki tuottet</Card.Title>
              <Card.Text>
                Täältä löydät kaikki myytävänä olevat tuoteet helposti.
              </Card.Text>
              <div className="buttonToCenter" >
                <button className="webShopButton">Katso lisää</button>
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
