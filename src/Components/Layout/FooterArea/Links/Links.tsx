import { NavLink } from "react-router-dom";
import appConfig from "../../../../Utils/AppConfig";
import "./Links.css";
import SingleLinkFamily from "./SingleLinkFamily/SingleLinkFamily";
import { SingleLink } from "../../../../Models/SingleLink";
import { SingleLinkFamilyModel } from "../../../../Models/SingleLinkFamilyModel";

function Links(): JSX.Element {
    const topDestinations: SingleLink[] = [
        new SingleLink("Tel Aviv", appConfig.locationsTelAvivPath),
        new SingleLink("Jerusalem", appConfig.locationsJerusalemPath),
        new SingleLink("Haifa", appConfig.locationsHaifaPath),
        new SingleLink("Be'er Sheva", appConfig.locationsBeerShevaPath),
        new SingleLink("Ra'anana", appConfig.locationsRaananaPath),
        new SingleLink("Ben Gurion Airport", appConfig.locationsBenGurionPath),
    ];
    const carRentals: SingleLink[] = [
        new SingleLink("All Our Vehicles", appConfig.fleetPageAllVehiclesPath),
        new SingleLink("Suv & Off Road", appConfig.fleetPageSuvOffRoadPath),
        new SingleLink("Vans & Trucks", appConfig.fleetPageVansTrucksPath),
        new SingleLink("Two Wheels", appConfig.fleetPageMotorcyclesScootersPath),
        new SingleLink("Luxury", appConfig.fleetPageLuxuryPath),
        new SingleLink("Business Rental", appConfig.servicesBusinessRentalPagePath),
        new SingleLink("Our Fleet", appConfig.fleetPagePath),
    ];
    const services: SingleLink[] = [
        new SingleLink("Vehicle Rental", appConfig.fleetPagePath),
        new SingleLink("Business Rental", appConfig.servicesBusinessRentalPagePath),
        new SingleLink("Monthly Rental", appConfig.servicesMonthlyRentalPagePath),
        new SingleLink("Group Car Rental", appConfig.servicesGroupRentalPagePath),
        new SingleLink("Chauffeur Services", appConfig.servicesChauffeurPagePath),
        new SingleLink("One Day Car Rental", appConfig.servicesOneDayRentalPagePath),
        new SingleLink("One Way Car Rental", appConfig.servicesOneWayRentalPagePath),
    ];
    const information: SingleLink[] = [
        new SingleLink("Who We Are", appConfig.samePagePath),
        new SingleLink("Useful information", appConfig.helpPageInfoPagePath),
        new SingleLink("Help Page", appConfig.helpPagePath),
        new SingleLink("Loyalty Program", appConfig.LoyaltyProgramPagePath),
        new SingleLink("Work With Us", appConfig.careersPagePath),
        new SingleLink("Lost & Found", appConfig.helpPageLostFoundPagePath),
        new SingleLink("Terms And Conditions", appConfig.helpPageTermsConditionsPagePath),
        new SingleLink("FAQ", appConfig.helpPageFAQPagePath),
    ];
    const dad: SingleLinkFamilyModel[] = [
        new SingleLinkFamilyModel("Top Destinations", topDestinations),
        new SingleLinkFamilyModel("Car Rental", carRentals),
        new SingleLinkFamilyModel("Services", services),
        new SingleLinkFamilyModel("Information", information),
    ];
    return (
        <div className="Links">
            {dad.map(family => <div>
                <div className="family-container">
                    <SingleLinkFamily header={family.header} singleLinks={family.singleLinks} />
                </div>
            </div>)}
            <div className="contact-icons">
                <h3>Get In Touch!</h3>
                <div>
                    <NavLink to={"https://www.linkedin.com/in/alexander-vasilenko-323a21299/"} target="_blank">
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
