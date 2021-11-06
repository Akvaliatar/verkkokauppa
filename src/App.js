import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <div>
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
        <div>
          <a href=''>Koti</a>
          <a href=''>Meistä</a>
          <a href=''>Palvelut</a>
          <a href=''>Verkkokauppa</a>
          <a href=''>Omat tiedot</a>
        </div>
      </header>

      <div>
        <p>kaiken mailman sisältöä</p>
        <Button>testi button</Button>
      </div>

      <footer>
        <Container>
          <Row>
            <Col>
              <h3>Seuraa meitä</h3>
              <figure>
                <img scr='' alt='Instagram'></img>
                <img scr='' alt='Facebook/Meta'></img>
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
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default App