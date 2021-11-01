import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="container mt-5 pt-5">
                    <div className="text-center pt-5">
                        <h1 className="fw-bolder mb-3 pt-5 mt-5" style={{ fontSize: '55px' }}><span style={{ color: 'rgb(99, 44, 98)', fontSize: '60px' }}>Welcome to Travelly</span></h1>
                        <h2 className="fw-bolder mb-3" style={{ fontSize: '35px', color: 'rgb(71, 76, 112)' }}>We Help You Travel Better</h2>
                        <p className="fs-5 text-light">Travel in style with holiday package that guarantees relaxation and extra pampering.</p>
                        <button className="visit-btn">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;