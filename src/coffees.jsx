
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import img from './assets/img-1.png';
import img1 from './assets/img-2.png';
import img2 from './assets/img-3.png';
import img3 from './assets/img-4.png';

function CoffeeCards() {
  return (
    <>
      <h1 className="content text-center">OUR COFFEE OFFER</h1>
      <Row className="g-1 justify-content-center">
        <Col md={3} xs={12} sm={6} className='trans'>
          <Card className='color'>
            <Card.Img className='color' variant="top" src={img} />
            <Card.Body className='head'>
              <Card.Title>TYPES OF COFFEE</Card.Title>
              <Card.Text>
                Looking at its layout. The point o
              </Card.Text>
              <Button className='s' variant="primary">READ MORE</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} xs={12} sm={6} className='trans'>
          <Card className='color'>
            <Card.Img variant="top" src={img1} />
            <Card.Body className='head'>
              <Card.Title>BEAN VARIETIES</Card.Title>
              <Card.Text>
                Looking at its layout. The point o
              </Card.Text>
              <Button className='s' variant="primary">READ MORE</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} xs={12} sm={6} className='trans'>
          <Card className='color'>
            <Card.Img variant="top" src={img2} />
            <Card.Body className='head'>
              <Card.Title>COFFEE & PASTRY</Card.Title>
              <Card.Text>
                Looking at its layout. The point o
              </Card.Text>
              <Button className='s' variant="primary">READ MORE</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} xs={12} sm={6} className='trans'>
          <Card className='color'>
            <Card.Img variant="top me-3" src={img3} />
            <Card.Body className='head'>
              <Card.Title>COFFEE TO GO</Card.Title>
              <Card.Text>
                Looking at its layout. The point o
              </Card.Text>
              <Button className='s' variant="primary">READ MORE</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </>
  );
}

export default CoffeeCards;
