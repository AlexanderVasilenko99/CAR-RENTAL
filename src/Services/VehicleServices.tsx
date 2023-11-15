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
            const response = await axios.get("/Vehicles.json");
            // const response = await axios.get("https://raw.githubusercontent.com/AlexanderVasilenko99/car-rental/main/public/Vehicles.json");
            const data: AllVehiclesByCategories = response.data.vehicles;
            const vehicles: VehicleModel[] = data.small.concat(data.medium).concat(data.large).concat(data.motorcycles_scooters)
                .concat(data.luxury).concat(data.suv_offroad).concat(data.vans_trucks);

            const action = { type: VehicleActionTypes.GetAllVehicles, payload: vehicles }
            vehiclesState.dispatch(action);
            return vehicles;
        }
    }
    public async GetVehiclesByCategory(cat: string): Promise<VehicleModel[]> {
        let vehicles: VehicleModel[];
        if (vehiclesState.getState().vehicles && vehiclesState.getState().vehicles.length > 0) {
            vehicles = vehiclesState.getState().vehicles;
        }
        else {
            // const response = await axios.get("/Vehicles.json");
            const response = await axios.get("https://raw.githubusercontent.com/AlexanderVasilenko99/car-rental/main/public/Vehicles.json");
            const data: AllVehiclesByCategories = response.data.vehicles;
            vehicles = data.small.concat(data.medium).concat(data.large).concat(data.motorcycles_scooters)
                .concat(data.luxury).concat(data.suv_offroad).concat(data.vans_trucks);
        }
        switch (cat) {
            case "small":
                vehicles = vehicles.filter(v => v.id >= 100 && v.id <= 199);
                break;
            case "medium":
                vehicles = vehicles.filter(v => v.id >= 200 && v.id <= 299);
                break;
            case "large":
                vehicles = vehicles.filter(v => v.id >= 300 && v.id <= 399);
                break;
            case "motorcycles&scooters":
                vehicles = vehicles.filter(v => v.id >= 400 && v.id <= 499);
                break;
            case "luxury":
                vehicles = vehicles.filter(v => v.id >= 500 && v.id <= 599);
                break;
            case "suv&offraod":
                vehicles = vehicles.filter(v => v.id >= 600 && v.id <= 699);
                break;
            case "vans&trucks":
                vehicles = vehicles.filter(v => v.id >= 700 && v.id <= 799);
                break;
            case "all":
                vehicles = vehicles;
                break;
        }
        return vehicles;
    }
}
const vehicleServices = new VehicleServices()
export default vehicleServices;

