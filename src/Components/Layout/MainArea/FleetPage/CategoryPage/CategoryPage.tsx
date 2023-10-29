import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { TransmissionTypes } from "../../../../../Models/FleetCategoryItemModel";
import VehicleCategory from "../../../../../Models/VehicleCategory";
import VehicleManufacturer from "../../../../../Models/VehicleManufacturer";
import vehicleServices from "../../../../../Services/VehicleServices";
import appConfig from "../../../../../Utils/AppConfig";
import "./CategoryPage.css";
import FleetCategoryItem from "./Item/Item";
import AllVehiclesByCategories from "../../../../../Models/AllVehiclesByCategories";

function FleetCategoryPage(): JSX.Element {

    const params = useParams();
    const [paramsCategory, setParamsCategory] = useState<string>();
    const [feVehicles, setFeVehicles] = useState<VehicleManufacturer[]>();

    useEffect(() => {
        setParamsCategory(params.vehicleCategory);
    }, [params]);



    vehicleServices.GetAllVehicles()
        .then(allBeVehicles => {
            const allVehicles: AllVehiclesByCategories = allBeVehicles;
            let category: VehicleManufacturer[];
            
            switch (paramsCategory) {
                case "small":
                    console.log("small activated");
                    category = allVehicles.small;
                    console.log(category);
                    break;
                case "medium":
                    console.log("medium activated");
                    category = allVehicles.medium;
                    console.log(category);
                    break;
                case "large":
                    console.log("large activated");
                    category = allVehicles.large;
                    console.log(category);
                    break;
                case "luxury":
                    console.log("luxury activated");
                    category = allVehicles.luxury;
                    console.log(category);
                    break;
                case "suv&offraod":
                    console.log("suv&offraod activated");
                    category = allVehicles.suvOffroad;
                    console.log(category);
                    break;
                case "vans&trucks":
                    console.log("vans&trucks activated");
                    category = allVehicles.vansTrucks;
                    console.log(category);
                    break;
                case "motorcycles&scooters":
                    console.log("motorcycles&scooters activated");
                    category = allVehicles.motorcyclesScooters;
                    console.log(category);
                    break;
                case "all":
                    console.log("all activated");
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
