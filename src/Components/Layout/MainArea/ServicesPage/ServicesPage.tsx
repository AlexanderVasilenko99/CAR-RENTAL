import { SingleServiceModel } from "../../../../Models/SingleServiceModel";
import appConfig from "../../../../Utils/AppConfig";
import "./ServicesPage.css";
import SingleService from "./SingleService/SingleService";

function ServicesPage(): JSX.Element {

    const services: SingleServiceModel[] = [
        new SingleServiceModel("Business Rental", "handshake2.png", appConfig.servicesBusinessRentalPagePath,
            "Discover a unique program built exclusively for businesses of all scales."),
        new SingleServiceModel("Monthly Rental", "calendar.png", appConfig.servicesMonthlyRentalPagePath,
            "Looking to rent for a while? We got you covered!"),
        new SingleServiceModel("Chauffeur Services", "chauffeur.png", appConfig.servicesChauffeurPagePath,
            "We offer a variety of chauffer services at any time all year around."),
        new SingleServiceModel("Group Car Rental", "group.png", appConfig.servicesGroupRentalPagePath,
            "Discover the best prices and discounts for groups renting 3 cars or more!"),
        new SingleServiceModel("One Day Car Rental", "oneday.png", appConfig.servicesOneDayRentalPagePath,
            "Learn about our affordable one day rental program."),
        new SingleServiceModel("One Way Car Rental", "destination.png", appConfig.servicesOneWayRentalPagePath,
            "Learn about our affordable one way rental program."),
    ]

    return (
        <div className="ServicesPage">
            <div className="image-container">
                {/* <img src={require("../../../../Assets/Images/Services/road2.png")} /> */}
                {services?.map(s => <div><SingleService serviceHeader={s.serviceHeader} serviceImageName={s.serviceImageName}
                    serviceParagraph={s.serviceParagraph}
                    destinationUrl={s.destinationUrl} /></div>)}
            </div>

        </div>
    );
}

export default ServicesPage;
