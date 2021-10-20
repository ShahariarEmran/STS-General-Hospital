import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner-1.png'
import banner2 from '../../images/banner-2.png'
import banner3 from '../../images/banner-3.png'
import './Banner.css'
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
                    <h1 className="text">STS General Hospital</h1>
                    <p className="text-p">Health is happiness not money, if you want to stay healthy, see a doctor in the hospital regularly.</p>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item style={{height:"100vh"}}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="text">STS General Hospital</h1>
                <p className="text-p">Health is happiness not money, if you want to stay healthy, see a doctor in the hospital regularly.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:"100vh"}}>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className="text">STS General Hospital</h1>
                    <p className="text-p">Health is happiness not money, if you want to stay healthy, see a doctor in the hospital regularly.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Banner;