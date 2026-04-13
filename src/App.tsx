import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useTheme } from './context/ThemeContext';
import Home from './components/Home';
import Analytics from './components/Analytics';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Smart Task Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/analytics">Analytics</Nav.Link>
            </Nav>
            <Button variant={theme === 'dark' ? 'outline-light' : 'outline-dark'} onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </>
  );
}

export default App;
