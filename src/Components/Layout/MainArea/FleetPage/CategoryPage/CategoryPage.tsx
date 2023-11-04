import { Autocomplete, Box, Slider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { VehicleModel } from "../../../../../Models/VehicleModel";
import vehicleServices from "../../../../../Services/VehicleServices";
import appConfig from "../../../../../Utils/AppConfig";
import "./CategoryPage.css";
import FleetItem from "./Item/Item";

export class searchValues {
    name: string;
    make: string;
    model: string;
    seats: string;
    constructor(name: string, make: string, model: string, seats: string) {
        this.name = name;
        this.make = make;
        this.model = model;
        this.seats = seats;
    }
}
export class MinMaxPrices {
    public lowestPrice: number;
    public highestPrice: number;
    constructor(lowestPrice: number, highestPrice: number) {
        this.lowestPrice = lowestPrice;
        this.highestPrice = highestPrice;
    }
}
function CategoryPage(): JSX.Element {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams({ s: "", name: "", make: "", model: "", seats: "" });
    const [searchValuesForm, setSearchValuesForm] = useState<searchValues>(new searchValues("", "", "", ""));
    let order: string = searchParams.get("s");
    let name: string = searchParams.get("name");
    let make: string = searchParams.get("make");
    let model: string = searchParams.get("model");
    let seats: string = searchParams.get("seats");
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [feVehicles, setFeVehicles] = useState<VehicleModel[]>();
    const [feVehicleNames, setFeVehicleNames] = useState<string[]>([]);
    const [feVehicleMakes, setFeVehicleMakes] = useState<string[]>([]);
    const [feVehicleModels, setFeVehicleModels] = useState<string[]>([]);
    const [feVehicleSeats, setFeVehicleSeats] = useState<string[]>([]);
    const [feVehicleMinMaxPrices, setFeVehicleMinMaxPrices] = useState<MinMaxPrices>();

    function changeURL(): void { order === "lth" ? changeParams("htl") : changeParams("lth"); }
    function changeParams(order: string): void {
        setSearchParams(prev => {
            prev.set("s", order);
            return prev;
        });
    }
    function changeSearchParams(): void {
        setSearchParams(prev => {
            prev.set("s", order);
            prev.set("name", searchValuesForm.name);
            prev.set("make", searchValuesForm.make);
            prev.set("model", searchValuesForm.model);
            prev.set("seats", searchValuesForm.seats.toString());
            return prev;
        });
    }
    function sortByParams(arr: VehicleModel[]): VehicleModel[] {
        let clone: VehicleModel[] = arr;
        if (name) { clone = clone.filter(v => v.full_name === name); }
        if (make) { clone = clone.filter(v => v.make === make); }
        if (model) { clone = clone.filter(v => v.model === model); }
        if (seats) { clone = clone.filter(v => v.seats.toString() === seats) };
        findSetFeVehiclesMinMaxPrices(clone);
        if (clone.length == 0 && arr.length != 0) { return [] }
        return clone;
    }
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
    function setValuesForAutoCompletes(arr: VehicleModel[]): void {
        let namesHelpSet: Set<string> = new Set();
        let makesHelpSet: Set<string> = new Set();
        let modelsHelpSet: Set<string> = new Set();
        let seatsHelpSet: Set<string> = new Set();
        arr?.forEach(v => namesHelpSet.add(v.full_name));
        setFeVehicleNames(Array.from(namesHelpSet));

        arr?.forEach(v => makesHelpSet.add(v.make));
        setFeVehicleMakes(Array.from(makesHelpSet));

        arr?.forEach(v => modelsHelpSet.add(v.model));
        setFeVehicleModels(Array.from(modelsHelpSet));

        arr?.forEach(v => seatsHelpSet.add(v.seats.toString()));
        setFeVehicleSeats(Array.from(seatsHelpSet).sort((s1: string, s2: string) => +s1 > +s2 ? 1 : -1));
    }
    function getVehiclesByCategory(cat: string, arr: VehicleModel[]): VehicleModel[] {
        let clone: VehicleModel[] = [...arr];
        switch (cat) {
            case "small":
                clone = clone.filter(v => v.id >= 100 && v.id <= 199);
                break;
            case "medium":
                clone = clone.filter(v => v.id >= 200 && v.id <= 299);
                break;
            case "large":
                clone = clone.filter(v => v.id >= 300 && v.id <= 399);
                break;
            case "motorcycles&scooters":
                clone = clone.filter(v => v.id >= 400 && v.id <= 499);
                break;
            case "luxury":
                clone = clone.filter(v => v.id >= 500 && v.id <= 599);
                break;
            case "suv&offraod":
                clone = clone.filter(v => v.id >= 600 && v.id <= 699);
                break;
            case "vans&trucks":
                clone = clone.filter(v => v.id >= 700 && v.id <= 799);
                break;
            case "all":
                clone = clone;
                break;
        }
        return clone;
    }
    function findSetFeVehiclesMinMaxPrices(vehicles: VehicleModel[]): void {
        const arr: VehicleModel[] = [...vehicles];
        let minMaxPrices = new MinMaxPrices(arr[0].price, arr[0].price);
        arr.forEach(v => {
            if (v.price < minMaxPrices.lowestPrice) {
                let x: MinMaxPrices = { ...minMaxPrices }
                x.lowestPrice = v.price;
                minMaxPrices = x;
            }
            else if (v.price > minMaxPrices.highestPrice) {
                let x: MinMaxPrices = { ...minMaxPrices }
                x.highestPrice = v.price;
                minMaxPrices = x;
            }
        });
        setFeVehicleMinMaxPrices(minMaxPrices);
        setValue([minMaxPrices.lowestPrice, minMaxPrices.highestPrice])
    }

    useEffect(() => {
        vehicleServices.GetAllVehicles()
            .then((allBeVehicles: VehicleModel[]) => {
                let arr: VehicleModel[] = [...allBeVehicles];
                arr = getVehiclesByCategory(params.vehicleCategory, arr);
                arr = sortByPrice(arr);
                arr = sortByParams(arr);
                setValuesForAutoCompletes(arr);
                findSetFeVehiclesMinMaxPrices(arr);
                setFeVehicles(arr);
            })
            .catch(err => { console.log(err) });
    }, [params]);

    const [value, setValue] = React.useState<number[]>([0, 100]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[])
    };
    return (
        <div className="CategoryPage">
            <h1>Browse {params.vehicleCategory}</h1>
            <h3>Or go <NavLink to={appConfig.fleetPagePath}>Back To All Categories</NavLink></h3>

            {(feVehicles && feVehicles.length == 0) ? <></> :
                <div className={isExpanded ? " filter-container filter-container-expanded" : "filter-container"}>
                    <h2 onClick={() => setIsExpanded(!isExpanded)}>Filter</h2>
                    <form>
                        <div className='firstDiv'>
                            <Autocomplete
                                onChange={(event, value) => {
                                    console.log(value);
                                    const newSVals: searchValues = { ...searchValuesForm }
                                    if (value == null) { newSVals.name = ""; }
                                    else { newSVals.name = value; }
                                    setSearchValuesForm(newSVals);
                                }}
                                disablePortal
                                id="full-name-combo-box"
                                options={feVehicleNames}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Vehicle Name" />} />
                            <Autocomplete
                                onChange={(event, value) => {
                                    const newSVals: searchValues = { ...searchValuesForm }
                                    if (value == null) { newSVals.make = ""; }
                                    else { newSVals.make = value; }
                                    setSearchValuesForm(newSVals)
                                }}
                                disablePortal
                                id="make-combo-box"
                                options={feVehicleMakes}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Vehicle Make" />} />
                            <Autocomplete
                                onChange={(event, value) => {
                                    const newSVals: searchValues = { ...searchValuesForm }
                                    if (value == null) { newSVals.model = ""; }
                                    else { newSVals.model = value; }
                                    setSearchValuesForm(newSVals)
                                }}
                                disablePortal
                                id="model-combo-box"
                                options={feVehicleModels}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Vehicle Model" />} />
                            <Autocomplete
                                onChange={(event, value) => {
                                    const newSVals: searchValues = { ...searchValuesForm }
                                    if (value == null) { newSVals.seats = ""; }
                                    else { newSVals.seats = value.toString(); }
                                    setSearchValuesForm(newSVals)
                                }}
                                disablePortal
                                id="seats-combo-box"
                                options={feVehicleSeats}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Number Of Seats" />} />
                        </div>
                        <div className='secondDiv'>
                            {feVehicleMinMaxPrices &&
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        min={feVehicleMinMaxPrices.lowestPrice}
                                        max={feVehicleMinMaxPrices.highestPrice}
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                    // getAriaValueText={valuetext}
                                    />
                                </Box>
                            }
                        </div>
                        <button id="searchCarBtn" type='button' onClick={changeSearchParams}>Find My Rental!</button>
                    </form>
                </div>}

            {(feVehicles && feVehicles.length == 0) ?
                <></> :
                <h5> Sort by &nbsp;
                    <a onClick={changeURL}>
                        Price {order === "" ? "" : (order === "lth" ? "Low To High " : "High To Low ")}&nbsp;
                    </a>
                    <a onClick={resetParams}>Most Popular</a>
                </h5>}

            {feVehicles ? (feVehicles.length == 0 && <h3 className="workInProgress">We're working on it!<br />
                {params.vehicleCategory} vehicles will be available soon...</h3>) : ""}

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
                        engine_configuration={v.engine_configuration} />
                </div>)}
            </div>
        </div >
    );
}

export default CategoryPage;
