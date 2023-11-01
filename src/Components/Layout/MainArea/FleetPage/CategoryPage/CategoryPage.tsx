import { useEffect, useState } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { VehicleModel } from "../../../../../Models/VehicleModel";
import vehicleServices from "../../../../../Services/VehicleServices";
import appConfig from "../../../../../Utils/AppConfig";
import "./CategoryPage.css";
import FleetItem from "./Item/Item";
import { AllVehiclesByCategories } from "../../../../../Models/AllVehiclesByCategories";
import BeatLoader from "react-spinners/BeatLoader";

function CategoryPage(): JSX.Element {

    const params = useParams();
    const [feVehicles, setFeVehicles] = useState<VehicleModel[]>();
    const [searchParams, setSearchParams] = useSearchParams({ s: "" });

    const order: string = searchParams.get("s");
    // order === "lth" ? setSerachOrder("Low To High") : setSerachOrder("High To Low");

    function changeParamsLTH(): void {
        console.log("changing params to LTH");
        setSearchParams(prev => { prev.set("s", "lth"); return prev; });
    }
    function changeParamsHTL(): void {
        console.log("changing params to HTL");
        setSearchParams(prev => { prev.set("s", "htl"); return prev; });
    }
    function changeURL(): void {
        order === "lth" ? changeParamsHTL() : changeParamsLTH();
    }

    useEffect(() => {
        vehicleServices.GetAllVehicles()
            .then((allBeVehicles: AllVehiclesByCategories) => {
                let arr: VehicleModel[] = [];
                switch (params.vehicleCategory) {
                    case "small":
                        arr = allBeVehicles.small;
                        break;
                    case "medium":
                        arr = allBeVehicles.medium;
                        break;
                    case "large":
                        arr = allBeVehicles.large
                        break;
                    case "luxury":
                        arr = allBeVehicles.luxury
                        break;
                    case "suv&offraod":
                        arr = allBeVehicles.suv_offroad
                        break;
                    case "vans&trucks":
                        arr = allBeVehicles.vans_trucks
                        break;
                    case "motorcycles&scooters":
                        arr = allBeVehicles.motorcycles_scooters
                        break;
                    case "all":
                        let subArr: VehicleModel[] = [];
                        for (const v of allBeVehicles.small) { subArr.push(v); }
                        for (const v of allBeVehicles.medium) { subArr.push(v); }
                        for (const v of allBeVehicles.large) { subArr.push(v); }
                        for (const v of allBeVehicles.luxury) { subArr.push(v); }
                        for (const v of allBeVehicles.suv_offroad) { subArr.push(v); }
                        for (const v of allBeVehicles.vans_trucks) { subArr.push(v); }
                        for (const v of allBeVehicles.motorcycles_scooters) { subArr.push(v); }
                        arr = (subArr);
                        break;
                }
                arr = sortByPrice(arr);
                setFeVehicles(arr);
            })
            .catch(err => { console.log(err) });
    }, [params]);

    function sortByPrice(v: VehicleModel[]): VehicleModel[] {
        const clone: VehicleModel[] = Object.assign([], v);
        if (order == "lth") { clone.sort((v1, v2) => v1.price > v2.price ? 1 : -1) }
        else if (order === "htl") { clone.sort((v1, v2) => v1.price > v2.price ? -1 : 1) };
        return clone;
    }

    return (
        <div className="CategoryPage">
            <h1>Browse {params.vehicleCategory}</h1>
            <h3><NavLink to={appConfig.fleetPagePath}>Back To All Categories</NavLink></h3>
            <h5>Sort by&nbsp;<a onClick={changeURL}>
                Price {order === "" ? "" : (order === "lth" ? "Low To High" : "High To Low")}
            </a></h5>
            {feVehicles ? "" : <div className="spinner-container"><BeatLoader color="#A73121" loading size={25} /></div>}
            <div className="CategoryPageGridContainer">
                {feVehicles?.map(v => <div>
                    <FleetItem key={v.full_name} full_name={v.full_name} image_name={v.image_name} air_conditioner={v.air_conditioner}
                        price={v.price} //change v.fullname to id later
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
