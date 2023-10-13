import { NavLink, useParams } from "react-router-dom";
import "./FleetCategoryPage.css";
import { useEffect, useState } from "react";
import FleetCategoryItem from "./FleetCategoryItem/FleetCategoryItem";
import appConfig from "../../../../../Utils/AppConfig";
import FleetCategoryItemModel, { TransmissionTypes } from "../../../../../Models/FleetCategoryItemModel";

function FleetCategoryPage(): JSX.Element {

    const params = useParams();
    console.log(params);

    const [category, setCategory] = useState<string>();
    useEffect(() => {
        setCategory(params.vehicleCategory);
    }, [params]);

    return (
        <div className="FleetCategoryPage">
            <h1>Browse {category}</h1>
            <h3><NavLink to={appConfig.fleetPagePath}>Back To All Categories</NavLink></h3>
            <div className="FleetCategoryPageGridContainer">

                <FleetCategoryItem vehicleName="Nissan Sentra SR 1.6" imageName="sentra.png" airConditioning doors={4} fuel="Unleaded"
                    luggage={3} passengers={5} redirectPath={appConfig.samePagePath} tankCapacity="100L" transmission={TransmissionTypes.automatic}
                    radio trunkCapacity="3000L" />

                <FleetCategoryItem vehicleName="Ford Focus 1.2 Turbo" imageName="focus.png" airConditioning doors={4} fuel="Unleaded"
                    luggage={3} passengers={5} redirectPath={appConfig.samePagePath} tankCapacity="100L" transmission={TransmissionTypes.automatic}
                    radio trunkCapacity="3000L" />

                <FleetCategoryItem vehicleName="Ford Focus 1.2 Turbo" imageName="focus.png" airConditioning doors={4} fuel="Unleaded"
                    luggage={3} passengers={5} redirectPath={appConfig.samePagePath} tankCapacity="100L" transmission={TransmissionTypes.automatic}
                    radio trunkCapacity="3000L" />

                <div>{category} item 1</div>
                <div>{category} item 2</div>
                <div>{category} item 3</div>
                <div>{category} item 4</div>
            </div>
        </div>
    );
}

export default FleetCategoryPage;
