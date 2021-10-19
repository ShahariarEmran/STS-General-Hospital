import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    // const {service} = props;
    const { id, name, img, short } = service;
    
    return (
        <Container>
                <div className="container service pb-3 ">
                <img src={img} height="350px" weigh="525px" alt="" />
                <br /> <br />
                <h3>{name}</h3>
                <p className="px-5">{short}</p>
                <Link to={`/detail/${id}`}>
                <button className="btn btn-warning">Click for Detail {name.toLowerCase()}</button>
                </Link>
                </div> 
        </Container>
    );
};

export default Service;