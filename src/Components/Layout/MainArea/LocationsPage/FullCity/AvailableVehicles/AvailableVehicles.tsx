import { NavLink } from "react-router-dom";
import appConfig from "../../../../../../Utils/AppConfig";
import "./AvailableVehicles.css";

export class AvailableVehiclesProps {
    public branch: string;
}
export function AvailableVehicles(props: AvailableVehiclesProps): JSX.Element {
    // Add params:LocationModel
    return (
        <div className="AvailableVehicles">
            <h3 id="availablevehicles"><NavLink to={appConfig.fleetPageAllVehiclesPath}>Available Vehicles</NavLink></h3>
            <p>At {props.branch} you can choose the car that best suits your needs, you will have all our vehicles in the fleet
                at your disposal, with manual or automatic transmission: small cars, medium and large cars, convertibles,
                SUVs and offroaders, minivans and trucks, motorcycles and scooters, and even luxury cars.&nbsp;
                <NavLink to={appConfig.fleetPageAllVehiclesPath}>See All Available Vehicles</NavLink></p>
        </div>
    );
}