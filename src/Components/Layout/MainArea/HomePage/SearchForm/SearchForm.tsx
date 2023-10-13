import { useForm } from "react-hook-form";
import "./SearchForm.css";

function SearchForm(): JSX.Element {
    const { register, handleSubmit } = useForm();

    function search(params:any) {
        console.log("nigger");
        console.log(params);
        
    }
    return (

        <div className='SearchForm'>
            <h2>Find your next car rental here!</h2>
            <form onSubmit={handleSubmit(search)}>
                <div>
                    <input type="text" placeholder='Pickup Location' {...register("pickupLocation")} />
                </div>
                <div>
                    <label></label><input type="date" {...register("pickupDate")}/>
                    <input type="time" {...register("pickupTime")}/>
                </div>
                <div>
                    <input type="text" placeholder='Drop off Location' {...register("dropOffLocation")}/>
                </div>
                <div>
                    <label></label><input type="date" {...register("dropOffDate")}/>
                    <input type="time" {...register("dropOffTime")}/>
                </div>
                <div>
                    <select name="" {...register("age")}>
                        <option value="all" selected disabled>Drivers Age</option>
                        <option value="7000">All</option>
                        <option value="1823">18-23</option>
                        <option value="2346">23-46</option>
                        <option value="4670">46-70</option>
                        <option value="7000">70+</option>
                    </select>
                    <select name="" {...register("category")}>
                        <option value="all" selected disabled>Vehicle Category</option>
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
                        <input id='checkboxLoyaltyForm' type="checkbox" {...register("isLoyal")}/>
                    </div>
                </div>
                <button type="submit">Find my rental!</button>
            </form>

        </div>
    );
}

export default SearchForm;
