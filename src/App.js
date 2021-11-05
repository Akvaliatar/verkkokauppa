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
        <div>
          <a href=''>FI</a>|<a href=''>EN</a>
          <figure>
            <img scr='./logo.jpeg' alt='logo'></img>
          </figure>
        </div>
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
          <Row md={4}>
            <Col>
              <p>Seuraa meitä</p>
              <figure>
                <img scr='' alt=''></img>
                <img scr='' alt=''></img>
              </figure>
              <a href=''>evästeet</a>
              <a href=''>rekisteriseloste</a>
              <a href=''>toimitusehdot</a>
              <a href=''>yhteystiedot</a>
            </Col>
            <Col>
              <p>Lataa sovellus</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default App


