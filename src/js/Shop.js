import React,{ useEffect, useState } from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios"

export default function Shop({url, category}) {

  {/* getcategories php ja axios kategorioiden hakuuns */ }

  const [categories, setCategories] = useState([])

  useEffect(() => {
    console.log(category)
    axios.get(url + "/products/getcategories.php/")
      .then((response) => {
        const json = response.data
        setCategories(json)
      }).catch(error => {
        if (error.response === undefined) {
          alert(error)
        } else {
          alert(error.response.data.error)
        }
      })
  }, [])

  {/* scroll button */ }
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
          <Col xs={{ span: 12, order: 2 }} lg={{ span: 12, order: 1 }}>
            <h1>Shop</h1>
          </Col>
          <Col xs={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }}>
            <p>Alta löydät omista kategorioista myytävänä olevia tuotteita ja palveluita.</p>
          </Col>
        </Row>

        {/* kategorioiden haku backendistä */}
        {categories?.map(category => (
          <div key={category.trnro}>
            <Card style={{ width: '18rem', border: " 2px solid #514b3b" }}>
              <Card.Img variant="top" src={"https://koulu-b8d54.web.app/" + category.trnimi + ".svg"} />
              <Card.Body style={{ background: "#a8ae8a" }}>
                <Card.Title><h2>{category.trnimi}</h2></Card.Title>
                <Card.Text>
                  <p>{category.teksti}</p>
                </Card.Text>
                <div className="buttonToCenter" >
                  <button className="webShopButton" >
                    <Link 
                      to={{
                        pathname: "/category",
                        state: {
                          trnro: category.trnro,
                          trnimi: category.trnimi,
                          teksti: category.teksti
                        }
                      }}>
                      Katso lisää
                    </Link>
                  </button>
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
      </Container>
    )
  }
