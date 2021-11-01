import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, serviceName, image, description } = service;
    return (
        <div>
            <Col className="p-4">
                <Card className="feature-card pb-2 border ">
                    <Card.Img variant="top" src={image} className="border border-success" style={{ width: '520px', height: '350px', margin: '10px' }} />
                    <Card.Body>
                        <Card.Title className="fw-bold text-center fs-4" style={{ color: 'rgb(58, 89, 52)' }}>{serviceName}</Card.Title>
                        <Card.Text className="text-center">
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <div className="mx-auto">
                        <Link to={`/service/${id}`}><button className="btn-details px-5">Book Now</button></Link>
                    </div>
                </Card>
            </Col>

        </div>
    );
};

export default Service;