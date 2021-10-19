import React from 'react';
import './Doctors.css'
import { Card } from 'react-bootstrap';
import doctor1 from '../../images/doctor-1.jpg'
import doctor2 from '../../images/doctor-2.jpg'
import doctor3 from '../../images/doctor-3.jpg'
import doctor4 from '../../images/doctor-4.jpg'
const Doctors = () => {
    return (
        <div className="doctor">
            <Card>
             <Card.Img variant="top" src={doctor1} height="500px" weigh="350px" />
                <Card.Body>
                  <Card.Title>Name : Dr. Seljan Khanam</Card.Title>
                  <Card.Text>
                     Doctor Title : MBBS Medicine
                  </Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={doctor2} height="500px" weigh="350px" />
                <Card.Body>
                  <Card.Title>Name : Dr. Bersor Hedumas</Card.Title>
                  <Card.Text>
                     Doctor Title : MBBS Medicine
                  </Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={doctor3} height="500px" weigh="350px" />
                <Card.Body>
                  <Card.Title>Name : Dr. Ashiqul Bariss</Card.Title>
                  <Card.Text>
                     Doctor Title : MBBS Medicine
                  </Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={doctor4} height="500px" weigh="350px" />
                <Card.Body>
                  <Card.Title>Name : Dr. Jaakiyer Jara</Card.Title>
                  <Card.Text>
                     Doctor Title : MBBS Medicine
                  </Card.Text>
                </Card.Body>
            </Card>
            
               


            
               
        </div>
    );
};

export default Doctors;