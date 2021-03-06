import React from "react";
import { Card, Container, Button, CardBody, CardTitle, CardText } from "reactstrap";

import stylist from './data.js';

function StylistCard() {
    return (
        <div className="stylists flex-grow-1">
            <Card className="stylist-cards">
                {/* <img variant="top" src={stylist.imgPath} className="img-fluid" alt="card-img" /> */}
                <CardBody>
                    {/* <CardTitle>{stylist.name}</CardTitle> */}
                    {/* <CardText>Specializes In:
                        <span>
                            <li>{stylist.specialty}</li>
                        </span>
                    </CardText> */}
                    <CardText>I’ve been a licensed hairstylist for 11 years and been an independent for the last five years. I graduated from Paul Mitchell, and have continued education from Toni and Guy, Sally Rogerson and various independent hairstylists. I’ve participated in photoshoots, hair shows and events like Sacramento Fashion Week. My specialty is natural and effortless highlights and haircuts.  <span>{stylist.bio}</span></CardText>
                    {/* <CardText>Years of Experience<span>{stylist.year}</span></CardText> */}
                    <Button><a href='../book/BookContainer.js'>Book an Appointment</a></Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default StylistCard;
