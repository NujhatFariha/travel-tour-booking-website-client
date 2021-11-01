import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import ExtraService from '../ExtraService/ExtraService';


const Home = () => {
    const [service, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://tranquil-dawn-73469.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            {/* banner on the homepage */}
            <Banner />
            <div className="pt-5">
                <h2 className="text-center mt-5 fw-bold" style={{ color: 'rgb(255, 153, 51)' }}>Today's Best Travel Deals !</h2>
                <div className=" px-5 home-service-container m-3">
                    {/* displayed 6 services on the home */}
                    {
                        service.map(service =>
                            <Service
                                Key={Service.id}
                                service={service} >
                            </Service>)
                    }
                </div>
            </div>
            {/* Extra 2 services on the homepage */}
            <ExtraService />
        </div>
    );
};

export default Home;