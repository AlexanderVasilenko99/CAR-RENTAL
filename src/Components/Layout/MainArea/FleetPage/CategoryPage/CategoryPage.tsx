import { useEffect, useState } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { VehicleModel } from "../../../../../Models/VehicleModel";
import vehicleServices from "../../../../../Services/VehicleServices";
import appConfig from "../../../../../Utils/AppConfig";
import "./CategoryPage.css";
import FleetItem from "./Item/Item";
import { Autocomplete, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, TextField } from '@mui/material';
import React from "react";

function CategoryPage(): JSX.Element {

    const params = useParams();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [feVehicles, setFeVehicles] = useState<VehicleModel[]>();
    const [feVehicleNames, setFeVehicleNames] = useState<string[]>([]);
    const [feVehicleMakes, setFeVehicleMakes] = useState<string[]>([]);
    let makesHelpSet: Set<string> = new Set();
    const [feVehicleModels, setFeVehicleModels] = useState<string[]>([]);
    let modelsHelpSet: Set<string> = new Set();
    const [feVehicleSeats, setFeVehicleSeats] = useState<number[]>([]);
    let seatsHelpSet: Set<number> = new Set();

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

                arr?.forEach(v => setFeVehicleNames(current => [...current, v.full_name]));
                arr?.forEach(v => makesHelpSet.add(v.make));
                setFeVehicleMakes(Array.from(makesHelpSet));

                arr?.forEach(v => modelsHelpSet.add(v.model));
                setFeVehicleModels(Array.from(modelsHelpSet));

                arr?.forEach(v => seatsHelpSet.add(v.seats));
                let x = Array.from(seatsHelpSet)
                x.sort((s1: number, s2: number) => s1 > s2 ? 1 : -1)
                setFeVehicleSeats(x);

                setFeVehicles(arr);
            })
            .catch(err => { console.log(err) });
    }, [params]);


    const [value, setValue] = React.useState<number[]>([10, 50]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    function RangeSlider() {

        return (
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
                />
            </Box>
        );
    }

    return (
        <div className="CategoryPage">
            <h1>Browse {params.vehicleCategory}</h1>
            <h3>Or go <NavLink to={appConfig.fleetPagePath}>Back To All Categories</NavLink></h3>

            {(feVehicles && feVehicles.length == 0) ? <></> :
                <div className={isExpanded ? " filter-container filter-container-expanded" : "filter-container"}>
                    <h2 onClick={() => setIsExpanded(!isExpanded)}>Filter</h2>
                    <div className="first-row">
                        <Autocomplete
                            disablePortal
                            id="full-name-combo-box"
                            options={feVehicleNames}
                            sx={{
                                borderColor: "white",
                                width: 300,
                            }}
                            renderInput={(params) => <TextField {...params} label="Vehicle Name" />} />
                        <Autocomplete
                            disablePortal
                            id="make-combo-box"
                            options={feVehicleMakes}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Vehicle Make" />} />
                        <Autocomplete
                            disablePortal
                            id="model-combo-box"
                            options={feVehicleModels}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Vehicle Model" />} />
                        <Autocomplete
                            disablePortal
                            id="seats-combo-box"
                            options={feVehicleSeats}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Number Of Seats" />} />
                    </div>
                    {/* 
                    <FormControl>
                        <FormLabel id="transmission-radio-buttons-label">Transmission</FormLabel>
                        <RadioGroup row name="radio-buttons-group">
                            <FormControlLabel value="automatic" control={<Radio />} label="Automatic" />
                            <FormControlLabel value="standard" control={<Radio />} label="Standard" />
                        </RadioGroup>
                    </FormControl>
                    <Slider disableSwap
                        // getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                    />
                    <div>price - range</div>*/}
                    <button id="searchCarBtn">Find My Rental!</button>

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
