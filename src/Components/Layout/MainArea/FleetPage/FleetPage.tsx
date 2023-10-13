import { NavLink } from "react-router-dom";
import "./FleetPage.css";
import FleetItem from "./FleetItem/FleetItem";
import appConfig from "../../../../Utils/AppConfig";

function FleetPage(): JSX.Element {
    return (
        <div className="FleetPage">
            <h1>Our fleet offers a variety of over 150 vehicle models across all categories for you to choose from!&nbsp;
                <NavLink to={appConfig.fleetPageAllVehiclesPath}>
                    View All
                </NavLink>
            </h1>

            <FleetItem vehicleCategoryName="Suv & Off Road" vehicleCategoryImgName="jeep3.png" vehicleCategoryRedirectPath={appConfig.fleetPageSuvOffRoadPath} />
            <FleetItem vehicleCategoryName="Luxury" vehicleCategoryImgName="porsche.png" vehicleCategoryRedirectPath={appConfig.fleetPageLuxuryPath} />
            <FleetItem vehicleCategoryName="Small" vehicleCategoryImgName="micra.png" vehicleCategoryRedirectPath={appConfig.fleetPageSmallPath} />
            <FleetItem vehicleCategoryName="Medium" vehicleCategoryImgName="focus.png" vehicleCategoryRedirectPath={appConfig.fleetPageMediumPath} />
            <FleetItem vehicleCategoryName="Large" vehicleCategoryImgName="sentra.png" vehicleCategoryRedirectPath={appConfig.fleetPageLargePath} />
            <FleetItem vehicleCategoryName="Vans & Trucks" vehicleCategoryImgName="mercedes4.png" vehicleCategoryRedirectPath={appConfig.fleetPageVansTrucksPath} />
            <FleetItem vehicleCategoryName="Motorcycles & Scooters" vehicleCategoryImgName="sv650.png" vehicleCategoryRedirectPath={appConfig.fleetPageMotorcyclesScootersPath} />

            <NavLink to={appConfig.fleetPageAllVehiclesPath}>
                <h3>Or browse all vehicles here</h3>
            </NavLink>
        </div>
    );
}

export default FleetPage;
