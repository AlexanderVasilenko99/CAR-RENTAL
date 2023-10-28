import axios from "axios";
import VehicleModel from "../Models/VehicleModel";
import { VehicleActionTypes, vehiclesState } from "../Redux/VehiclesState";

class VehicleServices {
    public async GetAllVehicles(): Promise<VehicleModel[]> {

        const response = await axios.get("../../src/Assets/JSONS/Vehicles.JSON");
        let vehicles: VehicleModel[];

        try {
            vehicles = response.data;
            console.log("vehicles:");
            console.log(vehicles);


            const action = { type: VehicleActionTypes.GetAllVehicles, payload: vehicles }
            vehiclesState.dispatch(action);

        } catch (err) {
            console.log(err);
        }
        return vehicles;
    }
}


const vehicleServices = new VehicleServices()
export default vehicleServices;

