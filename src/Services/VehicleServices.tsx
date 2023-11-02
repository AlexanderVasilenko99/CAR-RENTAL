import axios from "axios";
import { AllVehiclesByCategories } from "../Models/AllVehiclesByCategories";
import { VehicleModel } from "../Models/VehicleModel";
import { VehicleActionTypes, vehiclesState } from "../Redux/VehiclesState";

class VehicleServices {
    public async GetAllVehicles(): Promise<VehicleModel[]> {
        if (vehiclesState.getState().vehicles && vehiclesState.getState().vehicles.length > 0) {
            return vehiclesState.getState().vehicles;
        }
        else {
            // const response = await axios.get("/Vehicles.json");
            const response = await axios.get("https://raw.githubusercontent.com/AlexanderVasilenko99/car-rental/main/public/Vehicles.json");
            const data: AllVehiclesByCategories = response.data.vehicles;
            const vehicles: VehicleModel[] = data.small.concat(data.medium).concat(data.large).concat(data.motorcycles_scooters)
                .concat(data.luxury).concat(data.suv_offroad).concat(data.vans_trucks);

            const action = { type: VehicleActionTypes.GetAllVehicles, payload: vehicles }
            vehiclesState.dispatch(action);
            return vehicles;
        }
    }
}
const vehicleServices = new VehicleServices()
export default vehicleServices;

