import { NavLink } from "react-router-dom";
import "./FleetPage.css";
import FleetItem from "./FleetItem/FleetItem";
import appConfig from "../../../../Utils/AppConfig";
import { VehicleCategoryItem } from "../../../../Models/VehicleCategoryItem";

function FleetPage(): JSX.Element {
    const fleetItems: VehicleCategoryItem[] = [
        new VehicleCategoryItem("Suv & Off Road", "jeep.png", appConfig.fleetPageSuvOffRoadPath),
        new VehicleCategoryItem("Luxury", "porsche.png", appConfig.fleetPageLuxuryPath),
        new VehicleCategoryItem("Small", "micra.png", appConfig.fleetPageSmallPath),
        new VehicleCategoryItem("Medium", "focus.png", appConfig.fleetPageMediumPath),
        new VehicleCategoryItem("Large", "sentra.png", appConfig.fleetPageLargePath),
        new VehicleCategoryItem("Vans & Trucks", "mercedes.png", appConfig.fleetPageVansTrucksPath),
        new VehicleCategoryItem("Motorcycles & Scooters", "sv650.png", appConfig.fleetPageMotorcyclesScootersPath),
    ]
    return (
        <div className="FleetPage">
            <h1>Our fleet offers a variety of over 150 vehicle models across all categories for you to choose from!&nbsp;
                <NavLink to={appConfig.fleetPageAllVehiclesPath}>
                    View All
                </NavLink>
            </h1>
            {fleetItems.map(i => <FleetItem vehicleCategoryName={i.vehicleCategoryName}
                vehicleCategoryImgName={i.vehicleCategoryImgName} vehicleCategoryRedirectPath={i.vehicleCategoryRedirectPath} />)}
            <NavLink to={appConfig.fleetPageAllVehiclesPath}>
                <h3>Or browse all vehicles here</h3>
            </NavLink>
        </div>
    );
}

export default FleetPage;
