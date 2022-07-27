import React from 'react';
import Navbars from './Components/Navbar'
import Sliders from './Components/Slider'
import Cards from './Components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './App.css'



export default class App extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Navbars />
          </Col>
        </Row>
        <Container fluid >

          <Row>
            <Col>
              <Sliders />
            </Col>
          </Row>
          <Row className='designrow my-3'>
            <Col md={4}><Cards img="img/card1.jpg" head="Eiffell Tower" data="The Eiffel Tower is a wrought iron tower that stands 1,063 ft (324 m) tall. 
          It was designed for the Exposition Universelle, a world fair held in Paris in 1889. 
          It is currently the most famous symbol of Paris. " tolink="https://en.wikipedia.org/wiki/Eiffel_Tower" /></Col>
            <Col md={4}><Cards img="img/card2.jpg" head="CN Tower" data="At a height of 553.33 m (1,815 ft., 5 in), 
          the CN Tower is Canada’s National Tower, 
          an engineering Wonder, award-winning dining & entertainment destination, 
          and Toronto’s “must-see” for over 4 decades. " tolink="https://en.wikipedia.org/wiki/CN_Tower" /></Col>
            <Col md={4}><Cards img="img/card3.jpg" head="Burj Khalifa" data="Burj Khalifa, Khalifa also spelled Khalīfah, 
          mixed-use skyscraper in Dubai, United Arab Emirates, 
          that is the world’s tallest building, according to all three of the 
          main criteria by which such buildings are judged  " tolink="https://en.wikipedia.org/wiki/Burj_Khalifa" /></Col>
          </Row>
          <Row>
            <Col>

            </Col>
          </Row>

        </Container>
      </>
    );
  }
}


