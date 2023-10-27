import { NavLink } from "react-router-dom";
import appConfig from "../../../../Utils/AppConfig";
import "./Links.css";
import SingleLinkFamily from "./SingleLinkFamily/SingleLinkFamily";

function Links(): JSX.Element {
    return (
        <div className="Links">
            <div>
                <div className="family-container">
                    <SingleLinkFamily header="Top Destinations"
                        firstLinkHeader="Tel Aviv"
                        firstLinkPath={appConfig.locationsTelAvivPath}
                        secondLinkHeader="Jerusalem"
                        secondLinkPath={appConfig.locationsJerusalemPath}
                        thirdLinkHeader="Haifa"
                        thirdLinkPath={appConfig.locationsHaifaPath}
                        fourthLinkHeader="Be'er Sheva"
                        fourthLinkPath={appConfig.locationsBeerShevaPath}
                        fifthLinkHeader="Ra'anana"
                        fifthLinkPath={appConfig.locationsRaananaPath}
                        sixthLinkHeader="Ben Gurion Airport"
                        sixthLinkPath={appConfig.locationsBenGurionPath}
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
                        eighthLinkPath={appConfig.servicesBusinessRentalPagePath}
                        ninthLinkHeader="Our Fleet"
                        ninthLinkPath={appConfig.fleetPagePath}
                    />
                </div>
            </div>
            <div>
                <div className="family-container">
                    <SingleLinkFamily header="Services"
                        firstLinkHeader="Vehicle Rental"
                        firstLinkPath={appConfig.fleetPagePath}
                        secondLinkHeader="Business Rental"
                        secondLinkPath={appConfig.servicesBusinessRentalPagePath}
                        thirdLinkHeader="Monthly Rental"
                        thirdLinkPath={appConfig.servicesMonthlyRentalPagePath}
                        fourthLinkHeader="Group Car Rental"
                        fourthLinkPath={appConfig.servicesGroupRentalPagePath}
                        fifthLinkHeader="Chauffeur Services"
                        fifthLinkPath={appConfig.servicesChauffeurPagePath}
                        sixthLinkHeader="One Day Car Rental"
                        sixthLinkPath={appConfig.servicesOneDayRentalPagePath}
                        seventhLinkHeader="One Way Car Rental"
                        seventhLinkPath={appConfig.servicesOneWayRentalPagePath}
                    />
                </div>
            </div>
            <div>
                <div className="family-container">
                    <SingleLinkFamily header="Information"
                        firstLinkHeader="Who We Are"

                        secondLinkHeader="Useful information"
                        secondLinkPath={appConfig.helpPageInfoPagePath}
                        thirdLinkHeader="Help Page"
                        thirdLinkPath={appConfig.helpPagePath}
                        fourthLinkHeader="Loyalty Program"
                        fourthLinkPath={appConfig.LoyaltyProgramPagePath}
                        fifthLinkHeader="Work With Us"
                        fifthLinkPath={appConfig.careersPagePath}
                        sixthLinkHeader="Lost & Found"
                        sixthLinkPath={appConfig.helpPageLostFoundPagePath}
                        seventhLinkHeader="Terms And Conditions"
                        seventhLinkPath={appConfig.helpPageTermsConditionsPagePath}
                        eighthLinkHeader="FAQ"
                        eighthLinkPath={appConfig.helpPageFAQPagePath}
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
