import { NavLink } from "react-router-dom";
import "./MonthlyRental.css";
import appConfig from "../../../../../../Utils/AppConfig";

export function MonthlyRental(): JSX.Element {
    return (
        <div className="MonthlyRental">
            <h3 id="monthlyrental"><NavLink to={appConfig.servicesMonthlyRentalPagePath}>Monthly Rental</NavLink></h3>
            <p>If your needs are more related to the duration of the rental rather than the mileage, our
                monthly rental service with limited kilometres could be the ideal solution. For rentals exceeding 26 days
                and up to 90 days, you can choose our rates at 1500, 200 or 2500 kilometres/month.&nbsp;
                <NavLink to={appConfig.servicesMonthlyRentalPagePath}>Read More</NavLink></p>
        </div>
    );
}