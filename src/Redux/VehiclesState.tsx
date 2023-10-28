import { createStore } from "redux";
import VehicleModel from "../Models/VehicleModel";

export class VehiclesState {
    public vehicles: VehicleModel[];
}
export enum VehicleActionTypes {
    GetAllVehicles = "GetAllVehicles",
}
export interface VehicleAction {
    type: VehicleActionTypes;
    payload?: any;
}
function vehicleReducer(currentState = new VehiclesState(), action: VehicleAction): VehiclesState {
    const newState = { ...currentState };
    switch (action.type) {
        case VehicleActionTypes.GetAllVehicles: {
            newState.vehicles = action.payload;
        }
    }
    return newState;
}
export const vehiclesState = createStore(vehicleReducer);
