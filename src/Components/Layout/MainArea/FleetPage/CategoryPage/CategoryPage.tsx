import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AllVehiclesByCategories from "../../../../../Models/AllVehiclesByCategories";
import { TransmissionTypes } from "../../../../../Models/FleetCategoryItemModel";
import VehicleManufacturer from "../../../../../Models/VehicleManufacturer";
import VehicleModel from "../../../../../Models/VehicleModel";
import vehicleServices from "../../../../../Services/VehicleServices";
import appConfig from "../../../../../Utils/AppConfig";
import "./CategoryPage.css";
import FleetCategoryItem from "./Item/Item";

function FleetCategoryPage(): JSX.Element {

    const params = useParams();
    const [paramsCategory, setParamsCategory] = useState<string>();
    const [feVehicles, setFeVehicles] = useState<VehicleModel[]>();

    useEffect(() => {
        setParamsCategory(params.vehicleCategory);
    }, [params]);



    vehicleServices.GetAllVehicles()
        .then(allBeVehicles => {
            const allVehicles: AllVehiclesByCategories = allBeVehicles;
            let category: VehicleManufacturer[];

            switch (paramsCategory) {
                case "small":
                    category = allVehicles.small;
                    break;
                case "medium":
                    category = allVehicles.medium;
                    break;
                case "large":
                    category = allVehicles.large;
                    break;
                case "luxury":
                    // fill this later
                    break;
                case "suv&offraod":
                    // fill this later
                    break;
                case "vans&trucks":
                    // fill this later
                    break;
                case "motorcycles&scooters":
                    // fill this later
                    break;
                case "all":
                    // fill this later
                    break;
            }
            // console.log("feVehicles: " + feVehicles);

        })
        .catch(err => { console.log(err) });





    return (
        <div className="CategoryPage">
            <h1>Browse {paramsCategory}</h1>
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
