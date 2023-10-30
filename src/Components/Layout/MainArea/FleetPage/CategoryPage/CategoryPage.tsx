import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { VehicleModel } from "../../../../../Models/VehicleModel";
import vehicleServices from "../../../../../Services/VehicleServices";
import appConfig from "../../../../../Utils/AppConfig";
import "./CategoryPage.css";
import FleetItem from "./Item/Item";
import { AllVehiclesByCategories } from "../../../../../Models/AllVehiclesByCategories";

function CategoryPage(): JSX.Element {

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
                    <FleetItem full_name={v.full_name} image_name={v.image_name} air_conditioner={v.air_conditioner}
                        doors={v.doors} fuel={v.fuel} luggage={v.luggage} seats={v.seats} redirect_path={v.redirect_path}
                        tank_capacity={v.tank_capacity} abs={v.abs} cbs={v.cbs} engine_configuration={v.engine_configuration}
                        transmission={v.transmission} engine_size={v.engine_size} horse_power={v.horse_power} id={v.id} make={v.make}
                        license={v.license} luggage_available={v.luggage_available} model={v.model} make_year={v.make_year}
                        turbo={v.turbo} type={v.type} weight={v.weight} radio={v.radio} trunk_capacity={v.trunk_capacity} />
                </div>)}
            </div>
        </div>
    );
}

export default CategoryPage;
