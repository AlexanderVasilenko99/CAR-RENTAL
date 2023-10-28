import axios from "axios";
import VehicleModel from "../Models/VehicleModel";
import { VehicleActionTypes, vehiclesState } from "../Redux/VehiclesState";

class VehicleServices {
    public async GetAllVehicles(): Promise<VehicleModel[]> {

        const response = await axios.get("http://localhost:3030/api/products");
        console.log(response.data);

        let vehicles: VehicleModel[];
        vehicles = response.data;

        const action = { type: VehicleActionTypes.GetAllVehicles, payload: vehicles }
        vehiclesState.dispatch(action);

        return vehicles;
    }
}


const vehicleServices = new VehicleServices()
export default vehicleServices;

