import React, { useState } from 'react'
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cards({ image, rating, paragraph, title, price, renderRatingIcons }) {

    // const clickIcon = () => {
    //     const [color, setColor] = useState("null");
    //     let clickTimeout;
    //     const handleClick = (event) => {
    //         if (clickTimeout) {
    //             clearTimeout(clickTimeout);
    //             clickTimeout = null;
    //             setColor('white');
    //         } else {
    //             clickTimeout = setTimeout(() => {
    //                 setColor('red');
    //                 clickTimeout = null;
    //             }, 300);
    //         }
    //     };
    // }
    return (
        <Col sm={6} lg={4} xl={3} className="mb-4">
            <Card className="overflow-hidden ">
                <div className="overflow_hidden">
                    <Card.Img variant="top" src={image} />
                </div>
                <Card.Body className="p-0 !important">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="item_rating">{renderRatingIcons(rating)}</div>
                        <div className="wishlist" >
                            <i className="bi bi-heart"></i>
                        </div>

                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{paragraph}</Card.Text>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="menu_price">
                            <h5 className="mb-0">${price}</h5>
                        </div>
                        <div className="add_to_cart">
                            <Link to="/">
                                <i className="bi bi-bag me-2">
                                    Add To Cart
                                </i>
                            </Link>
                        </div>
                    </div>

                </Card.Body>
            </Card>

        </Col >
    )
}

export default Cards