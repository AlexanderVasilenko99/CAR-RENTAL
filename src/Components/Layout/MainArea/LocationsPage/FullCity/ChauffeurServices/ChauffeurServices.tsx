import { NavLink } from "react-router-dom";
import "./ChauffeurServices.css";
import appConfig from "../../../../../../Utils/AppConfig";

export function ChauffeurServices(): JSX.Element {
    return (
        <div className="ChauffeurServices">
            <h3 id="chauffeurservices"><NavLink to={appConfig.servicesChauffeurPagePath}>Chauffeur Services</NavLink></h3>
            <p>Whether it's a business trip or a carefree leisure stay, evaluate our luxury cars also in the rental
                formula with a chauffeur. The car rental with a chauffeur service is available at every hour of the
                day and night. Our drivers are at your service. Book the top of comfort, rent Vasilenko!&nbsp;
                <NavLink to={appConfig.servicesChauffeurPagePath}>Read More</NavLink></p>
        </div>
    );
}
