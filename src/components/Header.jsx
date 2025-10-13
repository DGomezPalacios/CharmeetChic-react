import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import logo from "../assets/img/LOGO.jpg";

export default function Header() {
    return (
        <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm border-bottom">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
                    <img src={logo} alt="Charme et Chic" height="56" />
                </Navbar.Brand>

                {/* Menú + iconos (colapsables en móvil) */}
                <NavBar />
            </Container>
        </Navbar>
    );
}
