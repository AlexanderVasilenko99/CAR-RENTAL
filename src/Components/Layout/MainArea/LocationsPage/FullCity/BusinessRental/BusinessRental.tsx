import { NavLink } from "react-router-dom";
import "./BusinessRental.css";
import appConfig from "../../../../../../Utils/AppConfig";

export function BusinessRental(): JSX.Element {
    return (
        <div className="BusinessRental">
            <h3 id="businessrental"><NavLink to={appConfig.servicesBusinessRentalPagePath}>Business Rental</NavLink></h3>
            <p>Are you a business client? or renting on behalf of one? If so, contact us during the booking process or get
                in touch with us via phone or email to discover more regarding business rates and discounts.&nbsp;
                <NavLink to={appConfig.servicesBusinessRentalPagePath}>Read More</NavLink>
            </p>
        </div>
    );
}
