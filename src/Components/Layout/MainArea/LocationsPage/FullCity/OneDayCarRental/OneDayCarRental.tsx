import { NavLink } from "react-router-dom";
import "./OneDayCarRental.css";
import appConfig from "../../../../../../Utils/AppConfig";

export function OneDayCarRental(): JSX.Element {
    return (
        <div className="OneDayCarRental">
            <h3 id="onedaycarrental"><NavLink to={appConfig.servicesOneDayRentalPagePath}>One Day Car Rental</NavLink></h3>
            <p>Looking for a one day rental? We offer special prices for rentals up to and including 12 hours ,18 hours,
                and 24 hours. <NavLink to={appConfig.servicesOneDayRentalPagePath}>Read More</NavLink></p>
        </div>
    );
}