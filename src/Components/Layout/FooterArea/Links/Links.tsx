import { NavLink } from "react-router-dom";
import "./Links.css";
import SingleLinkFamily from "./SingleLinkFamily/SingleLinkFamily";
import appConfig from "../../../../Utils/AppConfig";

function Links(): JSX.Element {
    return (
        <div className="Links">
            <div>
                <div className="family-container">
                    <SingleLinkFamily header="Top Destinations"
                        firstLinkHeader="Tel Aviv"
                        secondLinkHeader="Jerusalem"
                        thirdLinkHeader="Haifa"
                        fourthLinkHeader="Be'er Sheva"
                        fifthLinkHeader="Ra'anana"
                    />
                </div>
            </div>
            <div>
                <div className="family-container">
                    <SingleLinkFamily header="Cat Rental"
                        firstLinkHeader="All Family Cars"
                        firstLinkPath={appConfig.fleetPagePath}
                        secondLinkHeader="Suv & Off Road"
                        secondLinkPath={appConfig.fleetPageSuvOffRoadPath}
                        fifthLinkHeader="Vans & Trucks"
                        fifthLinkPath={appConfig.fleetPageVansTrucksPath}
                        sixthLinkHeader="Two Wheels"
                        sixthLinkPath={appConfig.fleetPageMotorcyclesScootersPath}
                        seventhLinkHeader="Luxury"
                        seventhLinkPath={appConfig.fleetPageLuxuryPath}
                        eighthLinkHeader="Business Rental"
                        eighthLinkPath="#"
                        ninthLinkHeader="Our Fleet"
                        ninthLinkPath={appConfig.fleetPagePath}
                    />
                </div>
            </div>
            <div>
                <div className="family-container">
                    <SingleLinkFamily header="Services"
                        firstLinkHeader="Vehicle Rental"
                        // secondLinkHeader="Chauffeur Services"
                        thirdLinkHeader="Business Rental"
                        fourthLinkHeader="Monthly Rental"
                        fifthLinkHeader="Special Needs"
                        sixthLinkHeader="Chauffeur Services"
                    />
                </div>
            </div>
            <div>
                <div className="family-container">
                    <SingleLinkFamily header="Information"
                        firstLinkHeader="Who Are We"
                        secondLinkHeader="Useful information"
                        thirdLinkHeader="Help Page"
                        fourthLinkHeader="Loyalty Program"
                        fifthLinkHeader="Work With Us"
                        sixthLinkHeader="Lost & Found"
                        seventhLinkHeader="Terms And Conditions"
                        eighthLinkHeader="FAQ"
                    />
                </div>
            </div>
            <div className="contact-icons">
                <h3>Get In Touch!</h3>
                <div>
                    <NavLink to={"#"}>
                        <img src={require("../../../../Assets/Images/linkedinicon.png")} alt="" />
                    </NavLink>
                    <NavLink to={"#"}>
                        <img src={require("../../../../Assets/Images/phoneicon.png")} alt="" />
                    </NavLink>
                    <NavLink to={"#"}>
                        <img src={require("../../../../Assets/Images/emailicon.png")} alt="" />
                    </NavLink>
                </div>
            </div>


        </div>
    );
}

export default Links;
