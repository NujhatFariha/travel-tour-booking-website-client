import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="p-5 about text-light text-center">
                <h1 className="header-font">EVERYTHING ABOUT US</h1>
                <p className="fs-4 mt-2" >We provide best travel experience for you and give you necessary guide and support</p>
                <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="m-5 d-flex" >
                <div className="m-5 p-5">
                    <h1 className="mb-3">About Us</h1>
                    <div className="p-4" style={{ backgroundColor: 'rgb(248, 240, 255)' }}>
                        <p className="fs-5" >We are your travel guide. We are running a travel agency that helps you to  travel better and in easy way. We provide every facilities for you and provide you with all possible boundaries you can enjoy while travelling.We make travelling easy and comfortable for you.We have many services available for you. You can travel around the whole bangladesh with us comfortably and easily. We have special services for our foreign travellers. We provide 24/7 hr support during your travel time. You can have a great time travelling with us at a very low budget. </p>
                    </div>
                </div>
                <div className="m-5 p-5">
                    <h1 className="mb-3">Our Mission</h1>
                    <div className="p-4" style={{ backgroundColor: 'rgb(235, 245, 239)' }}>
                        <p className="fs-5">Our mission is to provide top class facilities to the travellers. And specially we focus on giving top services to the foreign travellers and help them in travelling many places. Our travel agency provide all the support,care and facilities to the customers. We provide service at a very low price. We focus on giving all the care and support to our customers and make them happy.We provide services to various tourist places at a very low budget and our top priority is our customers satisfaction and we are really trying very hard to make the travellers happy while travelling.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;