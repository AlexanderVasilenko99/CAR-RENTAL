import { NavLink } from "react-router-dom";
import "./OneWayCarRental.css";
import appConfig from "../../../../../../Utils/AppConfig";

export function OneWayCarRental(): JSX.Element {
    return (
        <div className="OneWayCarRental">
            <h3 id="onewaycarrental"><NavLink to={appConfig.servicesOneWayRentalPagePath}>One Way Car Rental</NavLink></h3>
            <p>You can pick up your car at any location and you wish to return it at another city, a surcharge will be
                applied. <NavLink to={appConfig.servicesOneWayRentalPagePath}>Read More</NavLink></p>
        </div>
    );
}
