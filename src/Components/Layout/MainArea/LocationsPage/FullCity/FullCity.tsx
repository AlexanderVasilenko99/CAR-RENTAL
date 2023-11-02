import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { LocationItemAccordionModel } from "../../../../../Models/LocationItemAccordionModel";
import appConfig from "../../../../../Utils/AppConfig";
import Header from "../Header/Header";
import { AvailableVehicles } from './AvailableVehicles/AvailableVehicles';
import { BusinessRental } from './BusinessRental/BusinessRental';
import { ChauffeurServices } from './ChauffeurServices/ChauffeurServices';
import "./FullCity.css";
import { GroupCarRental } from './GroupCarRental/GroupCarRental';
import Map from './Map/Map';
import { MonthlyRental } from './MonthlyRental/MonthlyRental';
import { OneDayCarRental } from './OneDayCarRental/OneDayCarRental';
import { OneWayCarRental } from './OneWayCarRental/OneWayCarRental';
import { ReturnAfterHours } from './ReturnAfterHours/ReturnAfterHours';

function FullCity(params: LocationItemAccordionModel): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isClosingSoon, setIsClosingSoon] = useState<boolean>(false);
    const [isOpeningSoon, setIsOpeningSoon] = useState<boolean>(false);
    const location = `The ${params.city} location`

    useEffect(() => {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();

        hours >= 8 && hours < 22 ? setIsOpen(true) : setIsOpen(false);
        if (hours == 10 && minutes >= 30) { setIsOpeningSoon(true) };
        if (hours == 22 && minutes <= 30) { setIsClosingSoon(true) };
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
                            <p className={isOpen ? (isClosingSoon ? "soon" : "open") : (isOpeningSoon ? "soon" : "closed")}>
                                {isOpen ? (isClosingSoon ? "CLOSING SOON" : "OPEN") : (isOpeningSoon ? "OPENING SOON" : "CLOSED")}</p>
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

                    <Map {...params.locationParams} ></Map>
                    <p></p>

                    <AvailableVehicles branch={location} />
                    <ChauffeurServices />
                    <MonthlyRental />
                    <ReturnAfterHours />
                    <BusinessRental />
                    <OneWayCarRental />
                    <OneDayCarRental />
                    <GroupCarRental />
                </div>
            </div>
        </div>
    );
}

export default FullCity;

