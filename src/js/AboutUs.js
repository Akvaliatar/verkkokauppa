import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Barn from '../img/barn.jpg';
import Piglets from '../img/piglets.jpg';
import Goat from '../img/goat.jpg';
import Womanandllama from '../img/womanandllama.jpg';


export default function AboutUs () {

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
        <h1>Meistä</h1>
      </Row>
      <Row>
        <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
          <p>
            Toivon kotipuisto sijaitsee Oulun keskustasta n.30 min ajomatkan päästä luonnon keskuudessa 
            kauniin  merinäkymän vieressä. Tilalle pääsee helposti myös julkisia käyttäen. 
          </p>
          <p>
            Tilalla pääset tutustumaan kiltteihin ja hellyttäviin kotieläimiin, kuten lampaisiin, laamoihin, 
            lehmiin, poroihin, kissoihin, koiriin, pupuihin, kanoihin, ankkoihin, vuohiin tai jopa hieman 
            harvinaisempiin eläimiin.
          </p>
          <p>Puistosta löytyy myös eläinten lisäksi muuta toimintaa leikkipuisto perheen pienemmille, missä 
            on kiipeilyteline ja keinuja. Myös askartelupaja missä pääsee kokeilemaan huovutusta tai maalaamista.
          </p>
          <p>
            Jos nälkä yllättää vieraillessa tilalta löytyy laadukas kahvila, josta saa ostettua erilaisia herkkuja. 
            Samasta rakennuksesta löytyy myös kotieläinpuiston pieni putiikki, jonka villatuotteet on valmistettu tilan 
            omasta villasta.
          </p>
        </Col>
        <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
          <figure className="servicePics">
            <Image src={Barn} fluid style={{ width: "100%", height: "100%", paddingTop: "10px" }} />
          </figure>
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}} >
          <figure className="servicePics">
            <Image src={Womanandllama} fluid style={{ width: "100%", height: "100%" }} />
          </figure>
        </Col>
        <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 2}}>
          <h3>Toimita</h3>
          <p>
            Tarjoamme monipuolisia palveluita vierailijoille, kuten opastettuja kierroksia, kummitoimintaa eläimille, terapiaa ja
            monipuolisesti opettavia kursseja. Palveluihin voi tutustua tarkemmin palvelut sivuilta.
          </p>
          <div className="buttonToCenter">
            <button className="seviceButton" ><a href="./Services" >LUE LISÄÄ</a></button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
          <h3>Ohjeita vierailijalle</h3>  
          <p>
            Muistathan vieraillessasi toimia annettujen ohjeiden ja opastuksien mukaan. Näin mahdollistetaan hyvä vierailu kokemus 
            kaikille. Puiston työntekijät auttavat ja ohjeistavat ongelmatilanteissa.
          </p>
        </Col>
        <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}} >
          <figure className="servicePics">
            <Image src={Goat} fluid style={{ width: "100%", height: "100%" }} />
          </figure>
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
          <figure className="servicePics">
            <Image src={Piglets} fluid style={{ width: "100%", height: "100%" }} />
          </figure>
        </Col>
        <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 2}} >
          <h3>Eläimet</h3>
          <p>
            Tilalla asustaa tuttuja kilttejä ja hellyttäviä kotieläimiä, kuten lampaita, laamoja, lehmiä, poroja, kissoja, koiria, 
            pupuja, kanoja, ankkoja ja vuohia. Puistossa asustelee myös harvinaisempia eläimiä kuten kilpikonnia, strutseja ja papukaijoja. 
          </p>
          <p>
            Eläimet asuvat heille yksiöllisesti suunnitelluissa tarhoissa ja olemme huomioineet jokaisen eläimen yksilölliset tarpeet 
            heidän hoidossa. Tiloihin vieraat pääsevät tutustumaan paremmin ohjatuilla opaskierroksilla.
          </p>
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
