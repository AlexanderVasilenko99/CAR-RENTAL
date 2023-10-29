import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import VehicleModel from "../../../../../Models/VehicleModel";
import vehicleServices from "../../../../../Services/VehicleServices";
import appConfig from "../../../../../Utils/AppConfig";
import "./CategoryPage.css";
import FleetCategoryItem from "./Item/Item";
import AllVehiclesByCategories from "../../../../../Models/AllVehiclesByCategories";

function FleetCategoryPage(): JSX.Element {

    const params = useParams();
    const [feVehicles, setFeVehicles] = useState<VehicleModel[]>();

    useEffect(() => {
        vehicleServices.GetAllVehicles()
            .then((allBeVehicles: AllVehiclesByCategories) => {
                switch (params.vehicleCategory) {
                    case "small":
                        setFeVehicles(allBeVehicles.small)
                        break;
                    case "medium":
                        setFeVehicles(allBeVehicles.medium)
                        break;
                    case "large":
                        setFeVehicles(allBeVehicles.large)
                        break;
                    case "luxury":
                        setFeVehicles(allBeVehicles.luxury)
                        break;
                    case "suv&offraod":
                        setFeVehicles(allBeVehicles.suv_offroad)
                        break;
                    case "vans&trucks":
                        setFeVehicles(allBeVehicles.vans_trucks)
                        break;
                    case "motorcycles&scooters":
                        setFeVehicles(allBeVehicles.motorcycles_scooters)
                        break;
                    case "all":
                        let arr: VehicleModel[] = [];
                        for (const v of allBeVehicles.small) { arr.push(v); }
                        for (const v of allBeVehicles.medium) { arr.push(v); }
                        for (const v of allBeVehicles.large) { arr.push(v); }
                        for (const v of allBeVehicles.luxury) { arr.push(v); }
                        for (const v of allBeVehicles.suv_offroad) { arr.push(v); }
                        for (const v of allBeVehicles.vans_trucks) { arr.push(v); }
                        for (const v of allBeVehicles.motorcycles_scooters) { arr.push(v); }
                        setFeVehicles(arr);
                        break;
                }
            })
            .catch(err => { console.log(err) });
    }, [params]);

    return (
        <div className="CategoryPage">
            <h1>Browse {params.vehicleCategory}</h1>
            <h3><NavLink to={appConfig.fleetPagePath}>Back To All Categories</NavLink></h3>
            <div className="CategoryPageGridContainer">
                {feVehicles?.map(v => <div>
                    <FleetCategoryItem vehicleName={v.full_name} imageName={v.image_name} airConditioning doors={v.doors} fuel={v.fuel}
                        luggage={v.luggage} passengers={v.seats} redirectPath={appConfig.samePagePath} tankCapacity={v.tank_capacity}
                        transmission={v.transmission}
                        radio trunkCapacity="3000L" />
                </div>)}
            </div>
        </div>
    );
}

export default FleetCategoryPage;
