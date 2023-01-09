import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavsLogo from '../svg/navsLogo.svg';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

import images from '../assets/placeholder.jpg'

const NavigationBar = () => {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
        <Container>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand>
              <img src={NavsLogo} alt='Navbar Logo' width='30' height='30' />{' '}
              My Apps
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="flex items-center justify-center">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

const FooterBar = () => {
  return (
    <Container fluid>
      <Row xs={1} md={2} lg={3}>
        <Col>
          <Card border="dark" style={{ width: 'auto' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Dark Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='light'>
            <Card.Header>Header</Card.Header>
            <Card.Img variant="top" src={images} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg='dark' text='white' style={{ width: 'auto' }} className="mb-2">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export { NavigationBar, FooterBar }