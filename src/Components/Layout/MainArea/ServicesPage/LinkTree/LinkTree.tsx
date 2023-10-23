import { NavLink } from "react-router-dom";
import appConfig from "../../../../../Utils/AppConfig";
import "./LinkTree.css";

function LinkTree(): JSX.Element {
    return (
        <div className="LinkTree">
            <ul>
                <NavLink to={appConfig.servicesBusinessRentalPagePath}><li>Business Rental</li></NavLink>
                <NavLink to={appConfig.servicesMonthlyRentalPagePath}><li>Monthly Rental</li></NavLink>
                <NavLink to={appConfig.servicesGroupRentalPagePath}><li>Group Rental</li></NavLink>
                <NavLink to={appConfig.servicesOneWayRentalPagePath}><li>One Way Rental</li></NavLink>
                <NavLink to={appConfig.servicesOneDayRentalPagePath}><li>One Day Rental</li></NavLink>
            </ul>
        </div>
    );
}

export default LinkTree;
