import { HashLink } from "react-router-hash-link";
import appConfig from "../../../../../Utils/AppConfig";
import Header from "../../LocationsPage/Header/Header";
import "./BusinessRental.css";


function BusinessRental(): JSX.Element {
    return (
        <div className="BusinessRental">
			<div className="FullCity">
            <div id="header">
                <Header />
                <h1>
                business rental
                </h1>
            </div>
            <div className="grid-container">
                <div className="link-tree-container">
                    <div className="link-tree">
                        <h3>Summary</h3>
                        <ul>
                            <HashLink smooth to={appConfig.samePagePath + "header"}><li>Hours And Contact</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "aboutlocation"}><li>About The Location</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "reachoffice"}><li>How To Reach Our Office in</li></HashLink>
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

                    <h3 id="aboutlocation">About The  Location</h3>
                    <p></p>
                    <h3 id="reachoffice">How To Reach Our Office in </h3>
                    <p></p>


                    <h3 id="availablevehicles">Available Vehicles</h3>
                    <p>At you can choose the car that best suits your needs, you will have all our vehicles in the fleet
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
        </div>
    );
}

export default BusinessRental;
