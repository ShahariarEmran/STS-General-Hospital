import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner-1.jpg'
import banner2 from '../../images/banner-2.jpg'
import banner3 from '../../images/banner-3.jpg'

const Banner = () => {
    return (
        <div>
         <Carousel>
            <Carousel.Item style={{height:"100vh"}}>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>STS General Hospital</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item style={{height:"100vh"}}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h1>STS General Hospital</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:"100vh"}}>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>STS General Hospital</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Banner;