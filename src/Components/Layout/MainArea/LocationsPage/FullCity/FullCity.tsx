import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./FullCity.css";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocationItemAccordionModel from "../../../../../Models/LocationItemAccordionModel";
import { NavLink } from "react-router-dom";
import appConfig from "../../../../../Utils/AppConfig";
import { HashLink } from "react-router-hash-link";
import React from "react";
import Map from './Map/Map'

function FullCity(params: LocationItemAccordionModel): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    useEffect(() => {
        const time = new Date();
        const hours = time.getHours();
        hours >= 8 && hours < 22 ? setIsOpen(true) : setIsOpen(false)
    }, [])

    return (
        <div className="FullCity">
            <div id="header">
                <Header />
            </div>
            <div className="grid-container">
                <div className="link-tree-container">
                    <div className="link-tree">
                        <h3>Summary</h3>
                        <ul>
                            <HashLink smooth to={appConfig.samePagePath + "header"}><li>Hours And Contact</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "aboutlocation"}><li>About The {params.city} Location</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "reachoffice"}><li>How To Reach Our Office in {params.city}</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "availablevehicles"}><li>Available Vehicles</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "chauffeurservices"}><li>Chauffeur Services</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "monthlyrental"}><li>Monthly Rental</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "returnafterhours"}><li>Return After Hours</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "businessrental"}><li>Business Rental</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "onewaycarrental"}><li>One Way Car Rental</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "onedaycarrental"}><li>One Day Car Rental</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "groupcarrental"}><li>Group Car Rental</li></HashLink>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <div className="hours-and-contact" id="hours&contact">
                        <h3>Hours And Contact</h3>
                        <div className="subj-content">
                            <p className="days">Right Now:</p>
                            <p className={isOpen ? "open" : "closed"}>{isOpen ? "OPEN" : "CLOSED"}</p>
                            <p className="days">Sunday - Friday:</p>
                            <p>8AM - 10PM</p>
                            <p className="days">Saturday:</p>
                            <p>10AM - 10PM</p>
                        </div>
                        <div className="contact">
                            <div><LocalPhoneOutlinedIcon />050-814-5431<br />+972508145431</div>
                            <div><MailOutlineOutlinedIcon />alexandervjr1@gmail.com<br />{params.email}</div>
                            <div><PlaceOutlinedIcon />{params.address}</div>
                        </div>
                    </div>

                    <h3 id="aboutlocation">About The {params.city} Location</h3>
                    <p>{params.aboutLocation}</p>
                    <h3 id="reachoffice">How To Reach Our Office in {params.city}</h3>
                    <p>{params.reachOfficeInstructions}</p>

                    <Map></Map>
                    <p></p>

                    <h3 id="availablevehicles">Available Vehicles</h3>
                    <p>At {params.city} you can choose the car that best suits your needs, you will have all our vehicles in the fleet
                        at your disposal, with manual or automatic transmission: small cars, medium and large cars, convertibles,
                        SUVs and offroaders, minivans and trucks, motorcycles and scooters, and even luxury cars.</p>

                    <h3 id="chauffeurservices">Chauffeur Services</h3>
                    <p>Whether it's a business trip or a carefree leisure stay, evaluate our luxury cars also in the rental
                        formula with a chauffeur. The car rental with a chauffeur service is available at every hour of the
                        day and night. Our drivers are at your service. Book the top of comfort, rent Vasilenko!</p>

                    <h3 id="monthlyrental">Monthly Rental</h3>
                    <p>If your needs are more related to the duration of the rental rather than the mileage, our
                        monthly rental service with limited kilometres could be the ideal solution. For rentals exceeding 26 days
                        and up to 90 days, you can choose our rates at 1500, 200 or 2500 kilometres/month.</p>

                    <h3 id="returnafterhours">Return After Hours</h3>
                    <p>Do you need to return your car when our offices are closed? You can do it without problems with the key
                        box service that allows you to drop off your car leaving the keys in a special box.</p>

                    <h3 id="businessrental">Business Rental</h3>
                    <p>Are you a business client? or renting on behalf of one? If so, contact us during the booking process or get
                        in touch with us via phone or email to discover more regarding business rates and discounts.
                    </p>

                    <h3 id="onewaycarrental">One Way Car Rental</h3>
                    <p>You can pick up your car at any location and you wish to return it at another city, a surcharge will be
                        applied.</p>

                    <h3 id="onedaycarrental">One Day Car Rental</h3>
                    <p>Looking for a one day rental? We offer special prices for rentals up to and including 12 hours ,18 hours,
                        and 24 hours.</p>

                    <h3 id={"groupcarrental"}>Group Car Rental</h3>
                    <p>Looking to rent as part of a large group? contact us prior to booking to receive better prices for groups
                        renting 3 cars or more!</p>

                </div>
            </div>
        </div>
    );
}

export default FullCity;

