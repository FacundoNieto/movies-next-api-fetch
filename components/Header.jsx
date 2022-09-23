import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Image src="/img/anjrot2.png" width={100} height={59} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" /> {/*creo que no hace nada este componente*/}
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;