import React from 'react';
import { Row, Col } from "reactstrap";

import Placeholder from '../../assets/images/placeholder.png';


function About() {
    return(
        <>
            <Row>
                <Col md={12} className="d-flex align-items-center">
                    <h2 className="font-italic">About us</h2> </Col>
                <Col md={7} className="d-flex align-items-center">
                    <h4 className="text-justify">Lorem ipsum dolor sit amet, consectetur adip</h4> </Col>
                <Col md={5}>
                <img style={{ maxHeight: '500px' }}src={Placeholder} alt="photo of owner" /></Col>
            </Row>
        </>
    )
}

export default About;