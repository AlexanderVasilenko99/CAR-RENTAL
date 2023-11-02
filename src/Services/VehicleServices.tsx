import axios from "axios";
import { AllVehiclesByCategories } from "../Models/AllVehiclesByCategories";

class VehicleServices {
    public async GetAllVehicles(): Promise<AllVehiclesByCategories> {
        // const response = await axios.get("/Vehicles.json");
        const response = await axios.get("https://raw.githubusercontent.com/AlexanderVasilenko99/car-rental/main/public/Vehicles.json");

        const data: AllVehiclesByCategories = response.data.vehicles;
        console.log(data);
        
        // const action = { type: VehicleActionTypes.GetAllVehicles, payload: vehicles }
        // vehiclesState.dispatch(action);

        return data;
    }
}


const vehicleServices = new VehicleServices()
export default vehicleServices;

