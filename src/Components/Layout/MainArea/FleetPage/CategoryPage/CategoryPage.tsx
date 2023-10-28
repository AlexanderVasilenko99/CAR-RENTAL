import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { TransmissionTypes } from "../../../../../Models/FleetCategoryItemModel";
import appConfig from "../../../../../Utils/AppConfig";
import "./CategoryPage.css";
import FleetCategoryItem from "./Item/Item";

function FleetCategoryPage(): JSX.Element {

    const params = useParams();
    const [category, setCategory] = useState<string>();
    useEffect(() => {
        setCategory(params.vehicleCategory);
    }, [params]);

    return (
        <div className="CategoryPage">
            <h1>Browse {category}</h1>
            <h3><NavLink to={appConfig.fleetPagePath}>Back To All Categories</NavLink></h3>
            <div className="CategoryPageGridContainer">

                <FleetCategoryItem vehicleName="Nissan Sentra SR 1.6" imageName="sentra.png" airConditioning doors={4} fuel="Unleaded"
                    luggage={3} passengers={5} redirectPath={appConfig.samePagePath} tankCapacity="100L" transmission={TransmissionTypes.automatic}
                    radio trunkCapacity="3000L" />

                <FleetCategoryItem vehicleName="Ford Focus 1.2 Turbo" imageName="focus.png" airConditioning doors={4} fuel="Unleaded"
                    luggage={3} passengers={5} redirectPath={appConfig.samePagePath} tankCapacity="100L" transmission={TransmissionTypes.automatic}
                    radio trunkCapacity="3000L" />

                <FleetCategoryItem vehicleName="Ford Focus 1.2 Turbo" imageName="focus.png" airConditioning doors={4} fuel="Unleaded"
                    luggage={3} passengers={5} redirectPath={appConfig.samePagePath} tankCapacity="100L" transmission={TransmissionTypes.automatic}
                    radio trunkCapacity="3000L" />

                <FleetCategoryItem vehicleName="Ford Focus 1.2 Turbo" imageName="focus.png" airConditioning doors={4} fuel="Unleaded"
                    luggage={3} passengers={5} redirectPath={appConfig.samePagePath} tankCapacity="100L" transmission={TransmissionTypes.automatic}
                    radio trunkCapacity="3000L" />

                <FleetCategoryItem vehicleName="Ford Focus 1.2 Turbo" imageName="focus.png" airConditioning doors={4} fuel="Unleaded"
                    luggage={3} passengers={5} redirectPath={appConfig.samePagePath} tankCapacity="100L" transmission={TransmissionTypes.automatic}
                    radio trunkCapacity="3000L" />

                <FleetCategoryItem vehicleName="Ford Focus 1.2 Turbo" imageName="focus.png" airConditioning doors={4} fuel="Unleaded"
                    luggage={3} passengers={5} redirectPath={appConfig.samePagePath} tankCapacity="100L" transmission={TransmissionTypes.automatic}
                    radio trunkCapacity="3000L" />
            </div>
        </div>
    );
}

export default FleetCategoryPage;
