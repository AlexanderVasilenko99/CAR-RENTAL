import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { VehicleModel } from "../../../../../Models/VehicleModel";
import vehicleServices from "../../../../../Services/VehicleServices";
import appConfig from "../../../../../Utils/AppConfig";
import "./CategoryPage.css";
import FleetItem from "./Item/Item";

function CategoryPage(): JSX.Element {

    const params = useParams();
    const [feVehicles, setFeVehicles] = useState<VehicleModel[]>();
    const [searchParams, setSearchParams] = useSearchParams({ s: "" });
    const order: string = searchParams.get("s");

    function changeURL(): void { order === "lth" ? changeParams("htl") : changeParams("lth"); }
    function changeParams(order: string): void { setSearchParams(prev => { prev.set("s", order); return prev; }); }
    function resetParams(): void {
        searchParams.delete("s");
        searchParams.append("s", "");
        setSearchParams(searchParams);
    }
    function sortByPrice(v: VehicleModel[]): VehicleModel[] {
        const clone: VehicleModel[] = Object.assign([], v);
        if (order == "lth") { clone.sort((v1, v2) => v1.price > v2.price ? 1 : -1) }
        else if (order === "htl") { clone.sort((v1, v2) => v1.price > v2.price ? -1 : 1) };
        return clone;
    }

    useEffect(() => {
        vehicleServices.GetAllVehicles()
            .then((allBeVehicles: VehicleModel[]) => {
                let arr: VehicleModel[] = [];
                switch (params.vehicleCategory) {
                    case "small":
                        arr = allBeVehicles.filter(v => v.id >= 100 && v.id <= 199);
                        break;
                    case "medium":
                        arr = allBeVehicles.filter(v => v.id >= 200 && v.id <= 299);
                        break;
                    case "large":
                        arr = allBeVehicles.filter(v => v.id >= 300 && v.id <= 399);
                        break;
                    case "motorcycles&scooters":
                        arr = allBeVehicles.filter(v => v.id >= 400 && v.id <= 499);
                        break;
                    case "luxury":
                        arr = allBeVehicles.filter(v => v.id >= 500 && v.id <= 599);
                        break;
                    case "suv&offraod":
                        arr = allBeVehicles.filter(v => v.id >= 600 && v.id <= 699);
                        break;
                    case "vans&trucks":
                        arr = allBeVehicles.filter(v => v.id >= 700 && v.id <= 799);
                        break;
                    case "all":
                        arr = allBeVehicles;
                        break;
                }
                arr = sortByPrice(arr);
                setFeVehicles(arr);
            })
            .catch(err => { console.log(err) });
    }, [params]);


    return (
        <div className="CategoryPage">
            <h1>Browse {params.vehicleCategory}</h1>
            <h3><NavLink to={appConfig.fleetPagePath}>Back To All Categories</NavLink></h3>
            <h5>Sort by &nbsp;
                <a onClick={changeURL}>
                    Price {order === "" ? "" : (order === "lth" ? "Low To High " : "High To Low ")}&nbsp;
                </a>
                <a onClick={resetParams}>Most Popular</a>
            </h5>
            {feVehicles ? "" : <div className="spinner-container"><BeatLoader color="#A73121" loading size={25} /></div>}
            <div className="CategoryPageGridContainer">
                {feVehicles?.map(v => <div>
                    <FleetItem key={v.id}
                        id={v.id}
                        abs={v.abs}
                        cbs={v.cbs}
                        fuel={v.fuel}
                        type={v.type}
                        make={v.make}
                        price={v.price}
                        doors={v.doors}
                        turbo={v.turbo}
                        model={v.model}
                        seats={v.seats}
                        radio={v.radio}
                        weight={v.weight}
                        license={v.license}
                        luggage={v.luggage}
                        make_year={v.make_year}
                        full_name={v.full_name}
                        image_name={v.image_name}
                        engine_size={v.engine_size}
                        horse_power={v.horse_power}
                        transmission={v.transmission}
                        redirect_path={v.redirect_path}
                        tank_capacity={v.tank_capacity}
                        trunk_capacity={v.trunk_capacity}
                        air_conditioner={v.air_conditioner}
                        luggage_available={v.luggage_available}
                        engine_configuration={v.engine_configuration}
                    />
                </div>)}
            </div>
        </div>
    );
}

export default CategoryPage;
