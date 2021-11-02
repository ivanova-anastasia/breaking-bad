import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../../assets/icons/Walter-White-Breaking-Bad-PNG.png';
import './mainHeader.css';

const MainHeader = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' sticky='top'>
        <Container>
          <LinkContainer to=''>
            <Navbar.Brand>
              <img
                alt=''
                src={logo}
                width='30'
                height='30'
                className='d-inline-block align-top'
              />{' '}
              Breaking Bad
            </Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to='quotes'>
              <Nav.Link>Quotes</Nav.Link>
            </LinkContainer>
            <LinkContainer to='characters'>
              <Nav.Link>Characters</Nav.Link>
            </LinkContainer>
            <LinkContainer to='personal'>
              <Nav.Link>My data</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainHeader;
