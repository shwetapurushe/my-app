import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav, Container } from "react-bootstrap";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Contact } from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/home"}>
              Navbar
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
