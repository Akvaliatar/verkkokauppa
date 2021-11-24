import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import DogandCat from '../img/dogandcat.jpg';
import Logo from '../img/logo.png';
import axios from "axios"
import Category from "./Category";

export default function Shop() {

  {/* getcategories php ja axios kategorioiden hakuuns */ }
  const CATEGORY = "http://localhost/kotielainpuisto/products/getcategories.php"
  const [item, setItem] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    axios.get(CATEGORY)
      .then((response) => {
        setItem(response.data)
      }).catch(error => {
        alert(error.response ? error.response.data.error : error);
      })
  }, [])

  function close() {
    setSelectedItem(null)
  }


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



  if (selectedItem != null) {
    return (
      <Category
        trnro={selectedItem.trnro}
        trnimi={selectedItem.trnimi}
        teksti={selectedItem.teksti}
        close={close}
      ></Category>
    )
  } else {
    return (
      <Container className="shopContainer">
        <Row>
          <Col xs={{ span: 12, order: 2 }} lg={{ span: 12, order: 1 }}>
            <h1>Shop</h1>
          </Col>
          <Col xs={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }}>
            <p>Alta löydät omista kategorioista myytävänä olevia tuotteita ja palveluita.</p>
          </Col>
        </Row>

        {/* kategorioiden haku backendistä */}
        {item?.map(item => (
          <div key={item.trnro} onClick={e => setSelectedItem(item)}>
            <Card style={{ width: '18rem', border: " 2px solid #514b3b" }}>
              <Card.Img variant="top" src={DogandCat} />
              <Card.Body style={{ background: "#a8ae8a" }}>
                <Card.Title><p>{item.trnimi}</p></Card.Title>
                <Card.Text>
                  <p>{item.teksti}</p>
                </Card.Text>
                <div className="buttonToCenter" >
                  <button className="webShopButton" onClick={e => setSelectedItem(item)}>Katso lisää</button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}

        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            &#8679;
          </button>
        )}

        <Row>
          <Col xs={{ span: 12, order: 6 }} md={{ span: 6, order: 6 }} lg={{ span: 4, order: 6 }} >
            <Card >
              <Card.Img variant="top" src={Logo} />
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
      </Container>
    )
  }
}
