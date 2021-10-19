import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Detail.css'

const Detail = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/shahariaremran/Fakedata/main/services.json')
          .then(res => res.json())
          .then(data => setServices(data));
    },[])
    const service = services.find(se=>se.id == serviceId)
    return (
        <div className="detail pb-3">
         <div className="w-50">
            <Card>
               <Card.Img variant="top" src={service?.img} height="300px" weigh="150px" />
                <Card.Body>
                  <Card.Title>{service?.name}</Card.Title>
                  <Card.Text>
                     Course Price : {service?.detail}
                  </Card.Text>
                </Card.Body>
            </Card>
         </div>
        </div>
    );
};

export default Detail;