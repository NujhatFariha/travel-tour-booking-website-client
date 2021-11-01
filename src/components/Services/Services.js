import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://tranquil-dawn-73469.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="pt-5">
            <h1 className="text-center mt-5 mb-3 fw-bold" style={{ color: 'rgb(84, 25, 97)' }}>Travel Services We’re Offering for you</h1>
            <div>
                <Row xs={1} md={2} className="ms-5 g-3">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;