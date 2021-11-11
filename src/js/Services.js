import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sheep from '../img/sheep.jpg';
import Pig from '../img/piggy.jpg';
import Dogandcat from '../img/dogandcat.jpg';
import Horseandkid from '../img/horseandkid.jpg';
import Chikens from '../img/chikens.jpg';



export default function Services () {

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
    <Container>

      <Row>
        <h1>Palvelut</h1>
      </Row>

      <Row>
        <Col xs={12} lg={6}>
          <h3>Opastetut kierrokset</h3>
          <p>
            Tarjoamme opastettuja kierroksia missä tutustumme puiston tiloihin ja eläimiin. 
            Pääset tapaamaan tilalla asuvia eläimiä. Kerromme tietoa tilan asukkaista ja heidän
            elämästä tilalla. Miten kotieläinpuisto toimii ja miten eläimet meille valitaan. 
            Samalla tutustumme tilalla oleva kahvilan herkkuihin ja puotiin. Opastettujen 
            kierrosten ryhmäkoko on 10-30 henkeä. 
          </p>
        </Col>
        <Col xs={12} lg={6} >
          <figure className="servicePics">
            <img src={Sheep} />
          </figure>
        </Col>
        
      </Row>
      
      <Row>
        <Col xs={12} lg={6} >
          <h3>Terapiatoiminta</h3>
          <p>
            Tarjoamme erilaisia eläinpohjaista terapian muotoja asiakkaille. Terapia toteutetaan osaavien
            ohjaajien avulla ja terapiassa hyödynnetään kotieläinpuiston eläimiä. Terapia tapahtuu joko 
            yksilö- tai ryhmäterapiana. Suosituimmat tarjolla olevat terapia ryhmät ovat ratsastusterapia 
            ja toimintaterapia, missä hoidamme ryhmässä tilan eläimiä. 
          </p>
        </Col>
        <Col xs={12} lg={6} >
          <figure className="servicePics">
            <img src={Pig} />
          </figure>
        </Col>
        
      </Row>

      <Row>
        <Col xs={12} lg={6} >
          <h3>Kummitoiminta</h3>
          <p>
            Kiinnostaisiko ryhtyä eläimelle kummiksi? Meillä on  siihen mahdollisuus. Pääset valitsemaan 
            tilan  asukkaista “oman” eläimen, jota pääset hoitamaan ja tapaamaan etukäteen sovittuina 
            tapaamisilla. Jos kiinnostuit ota rohkeasti yhteyttä meihin joko soittamalla tai somen kautta. 
          </p>
        </Col>
        <Col xs={12} lg={6} >
          <figure className="servicePics">
            <img src={Dogandcat} />
          </figure>
        </Col>
        
      </Row>

      <Row>
        <Col xs={12} lg={6} >
          <h3>Kurssitoiminta</h3>
          <p>
            Tarjoamme monipuolisesti opettavia kursseja eläinten hoidosta ja niiden terveyden ylläpitämisestä.
            Kursseilla käydään ensin läpi teoriaa ja loppupuolella päästään kokeilemaan kurssilla opittua 
            tietoa puiston turvallisessa ympäristössä opettajan ohjauksen avulla. Opettajina toimii osaava 
            kotieläinpuiston tallimestari. Kurssien henkilö määrä on 10-50. 
          </p>
        </Col>
        <Col xs={12} lg={6} >
          <figure className="servicePics">
            <img src={Horseandkid} />
          </figure>
        </Col>
        
      </Row>

      <Row>
        <Col xs={12} lg={6} >
          <h3>Kesäleirit</h3>
          <p>
            Kesällä tarjoamme perheen pienemmille opettavaisia kesäkursseja. Tutustumme eri eläimiin ja niiden
            hoitoon. Kursseilla päästään osallistumaan tilan eläinten hoitoon ja jokaiselle kurssilaiselle 
            annetaan kurssin ajaksi oma hoidokki, jonka hoitoon osallistumaan kesäleirin aikana. 
          </p>
        </Col>
        <Col xs={12} lg={6} >
          <figure className="servicePics">
            <img src={Chikens} />
          </figure>
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
