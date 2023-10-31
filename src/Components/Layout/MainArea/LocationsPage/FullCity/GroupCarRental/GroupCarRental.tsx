import { NavLink } from "react-router-dom";
import "./GroupCarRental.css";
import appConfig from "../../../../../../Utils/AppConfig";

export function GroupCarRental(): JSX.Element {
    return (
        <div className="GroupCarRental">
            <h3 id="groupcarrental"><NavLink to={appConfig.servicesGroupRentalPagePath}>Group Car Rental</NavLink></h3>
            <p>Looking to rent as part of a large group? contact us prior to booking to receive better prices for groups
                renting 3 cars or more! <NavLink to={appConfig.servicesGroupRentalPagePath}>Read More</NavLink></p>
        </div>
    );
}
