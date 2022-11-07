import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href='/'>CalmNature</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;