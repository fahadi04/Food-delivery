import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    // Scroll State
    const [isVisible, setIsVisible] = useState(false);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const listenToScroll = () => {
        let heightToHidden = 500;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
    }
    // To run above function
    const useEffect = (() => {
        window.addEventListener("scroll", listenToScroll);
    });

    return (
        <>
            <footer className="footer_section">
                <Container>
                    <Row>
                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>
                                    Location
                                </h5>
                                <p>
                                    5505 Waterford District
                                </p>
                                <p>
                                    Dr, Miami,FL 33126
                                </p>
                                <p>
                                    United States
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>
                                    Working Hours
                                </h5>
                                <p>
                                    Mon-Fri: 9:00AM - 10:00PM</p>
                                <p>
                                    Saturday: 10:00AM - 8:30PM
                                </p>
                                <p>
                                    Sunday: 12:00PM - 5:00PM

                                </p>
                            </div>
                        </Col>
                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>
                                    Order Now
                                </h5>
                                <p>
                                    Quaerat neque purus ipsum
                                </p>
                                <p>
                                    <Link to="tel:7563987828" className="calling">
                                        756-398-7828
                                    </Link>
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>
                                    Follow Us
                                </h5>
                                <p>
                                    Quaerat neque purus ipsum
                                </p>
                                <ul className="list-unstyled text-center mt-2">
                                    <li>
                                        <Link to="/">
                                            <i className="bi bi-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="bi bi-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="bi bi-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="bi bi-youtube"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className="copy_right">
                        <Col>
                            <div>
                                <ul className="list-unstyled text-center mb-0 ">
                                    <Link className='border-end border-black' to="/">
                                        © 2024
                                        <span>
                                            FAHAD MASROOR
                                        </span>
                                        . All Rights Reserved
                                    </Link>
                                    <Link className='border-end border-black' to="/">
                                        About us
                                    </Link>
                                    <Link className='border-end border-black' to="/">
                                        Terms of Use
                                    </Link>
                                    <Link to="/">
                                        Privacy Policy
                                    </Link>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

            {/* Scroll top */}
            {
                isVisible && (<div className="scroll_top" onClick={scrollTop}>
                    <i className="bi bi-arrow-up-circle"></i>
                </div>)
            }

        </>
    )
}

export default Footer