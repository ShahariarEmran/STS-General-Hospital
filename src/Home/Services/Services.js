import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/shahariaremran/Fakedata/main/services.json')
          .then(res => res.json())
          .then(data => setServices(data));
    },[])
    return (
        <div className="" id="services">
            <h1 className="text-primary mt-5">Our Services</h1><br />
            <div className=" service-container">
            {
                services?.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;