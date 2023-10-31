import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import appConfig from "../../../../../Utils/AppConfig";
import "./SearchForm.css";

function SearchForm(): JSX.Element {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [hasClicked, setHasClicked] = useState<boolean>(false);

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    function search(params: any): void {
        let str = "";
        switch (params.category) {
            case "all":
                str = appConfig.fleetPageAllVehiclesPath;
                break;
            case "small":
                str = appConfig.fleetPageSmallPath;
                break;
            case "medium":
                str = appConfig.fleetPageMediumPath;
                break;
            case "large":
                str = appConfig.fleetPageLargePath;
                break;
            case "luxury":
                str = appConfig.fleetPageLuxuryPath;
                break;
            case "suv&offroad":
                str = appConfig.fleetPageSuvOffRoadPath;
                break;
            case "motorcycles&scooters":
                str = appConfig.fleetPageMotorcyclesScootersPath;
                break;
            case "vans&trucks":
                str = appConfig.fleetPageVansTrucksPath;
                break;
        }
        setTimeout(() => {
            setHasClicked(false);
            navigate(str);
        }, 2000)
    }
    return (

        <div className='SearchForm'>

            <h2>Find your next car rental here!</h2>
            <form onSubmit={handleSubmit(search)}>
                <div>
                    <input type="text" placeholder='Pickup Location' {...register("pickupLocation")} />
                </div>
                <div>
                    <label></label><input type="date" {...register("pickupDate")} />
                    <input type="time" {...register("pickupTime")} />
                </div>
                <div>
                    <input type="text" placeholder='Drop off Location' {...register("dropOffLocation")} />
                </div>
                <div>
                    <label></label><input type="date" {...register("dropOffDate")} />
                    <input type="time" {...register("dropOffTime")} />
                </div>
                <div>
                    <select name="" {...register("age")}>
                        <option value="all" disabled defaultValue={"all"}>Drivers Age</option>
                        <option value="7000">All</option>
                        <option value="1823">18-23</option>
                        <option value="2346">23-46</option>
                        <option value="4670">46-70</option>
                        <option value="7000">70+</option>
                    </select>
                    <select name="" {...register("category")}>
                        <option value="all" disabled defaultValue={"all"}>Vehicle Category</option>
                        <option value="all">All</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="luxury">Luxury</option>
                        <option value="suv&offroad">Suv & Off Road</option>
                        <option value="motorcycles&scooters">Motorcycles & Scooters</option>
                        <option value="vans&trucks">Vans & Trucks</option>
                    </select>
                    <div>
                        <label htmlFor="checkboxLoyaltyForm">&nbsp;&nbsp;Loyalty program member?</label>
                        <input id='' type="checkbox" {...register("isLoyal")} />
                        {/* <input id='checkboxLoyaltyForm' type="checkbox" {...register("isLoyal")} /> */}
                    </div>
                </div>
                <button type="submit" className={(isHovering ? "whiteBack" : "redBack")}

                    onClick={(e) => { e.currentTarget.blur(); setHasClicked(true) }}
                    onMouseOver={e => setIsHovering(true)}
                    onMouseOut={e => setIsHovering(false)}>

                    {hasClicked ? (isHovering ? <BeatLoader color="#A73121" loading size={15} /> : <BeatLoader color="#FAF6E9" loading size={15} />) : "Find my rental!"}
                </button>
            </form>

        </div>
    );
}

export default SearchForm;
