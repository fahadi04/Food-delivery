import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../../style/Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png';

const Header = () => {
    // const [nav, setNav] = useState(false);

    //Scroll Navbar

    // const chnageValueOnScroll = () => {
    //     const scrollValue = document?.documentElement?.scrollTop;
    //     //? is used here whenever dynamic data is coming and not found anyhow then it helps to manage that data
    //     scrollValue > 100 ? setNav(true) : setNav(false);
    // }

    // window.addEventListener("scroll", chnageValueOnScroll);
    window.onscroll = function () {
        var header = document.querySelector("header .navbar");
        var sticky = header.offsetTop;

        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    return (
        <header>
            <Navbar collapseOnSelect expand="lg"
            // className={`$ {nav=== true ? "sticky" :""}`}
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/" className="logo">
                            <img src={Logo} alt="Logo" className="img-fluid" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/About">About</Nav.Link>
                            <Nav.Link as={Link} to="/Menu">Menu</Nav.Link>
                            <Nav.Link as={Link} to="/Shop">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/">
                                <div className="cart">
                                    <i className="bi bi-cart fs-5"></i>
                                    <em className="roundpoint">0</em>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <br />
        </header>
    )
}

export default Header